// Antigravity - Reportaje Emotivo: ¡Vamos a Ser Papás!
// Controlador principal de reproducción y efectos

let currentIndex = 0;
let isPlaying = false;
let slideDuration = 12000; // 12 segundos por diapositiva para leer todo con tranquilidad
let slideTimer = null;
let timerStartTime = null;
let timerRemaining = slideDuration;
let bgMusic = null;
let customMusicSource = null;
let particles = [];
let animFrameId = null;

// Helper para resolver rutas a la carpeta fotos
function getMediaPath(src) {
  if (!src) return '';
  if (src.startsWith('fotos/') || src.startsWith('fotos\\') || src.startsWith('Musica/') || src.startsWith('musica/') || src.startsWith('data:') || src.startsWith('blob:') || src.startsWith('http')) {
    return src;
  }
  return 'fotos/' + src;
}

// Media Recorder para exportar video desde navegador
let mediaRecorder = null;
let recordedChunks = [];
let isRecording = false;

document.addEventListener('DOMContentLoaded', () => {
  initAudio();
  initParticles();
  initControls();
  renderSlide(0, false);
});

// Inicialización de audio
function initAudio() {
  bgMusic = document.getElementById('bg-music');
  bgMusic.volume = 0.65;

  const volumeSlider = document.getElementById('volume-slider');
  volumeSlider.addEventListener('input', (e) => {
    const vol = parseFloat(e.target.value);
    bgMusic.volume = vol;
    const volIcon = document.getElementById('volume-icon');
    if (vol === 0) {
      volIcon.className = 'fas fa-volume-mute';
    } else if (vol < 0.5) {
      volIcon.className = 'fas fa-volume-down';
    } else {
      volIcon.className = 'fas fa-volume-up';
    }
  });

  const customMusicInput = document.getElementById('custom-music-input');
  customMusicInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      bgMusic.src = url;
      bgMusic.play();
      document.getElementById('music-title').textContent = file.name.replace(/\.[^/.]+$/, "");
      document.querySelector('.music-disc').classList.remove('paused');
    }
  });
}

// Inicialización de Controles
function initControls() {
  const startBtn = document.getElementById('start-btn');
  const modalOverlay = document.getElementById('welcome-modal');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const playIcon = document.getElementById('play-icon');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const fullscreenBtn = document.getElementById('fullscreen-btn');
  const speedBtn = document.getElementById('speed-btn');
  const chapterSelect = document.getElementById('chapter-select');
  const timelineProgress = document.getElementById('timeline-progress');
  const recordBtn = document.getElementById('record-btn');

  // Modal de inicio
  startBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
    bgMusic.play().then(() => {
      document.querySelector('.music-disc').classList.remove('paused');
    }).catch(err => console.log('Audio autoplay blocked', err));
    startSlideshow();
  });

  // Play / Pause
  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      pauseSlideshow();
    } else {
      startSlideshow();
    }
  });

  // Siguiente / Anterior
  prevBtn.addEventListener('click', () => {
    prevSlide();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
  });

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (isPlaying) pauseSlideshow();
      else startSlideshow();
    } else if (e.code === 'ArrowRight') {
      nextSlide();
    } else if (e.code === 'ArrowLeft') {
      prevSlide();
    } else if (e.code === 'KeyF') {
      toggleFullscreen();
    }
  });

  // Selector de velocidad
  const speeds = [
    { label: 'Normal (12s)', val: 12000 },
    { label: 'Lento (16s)', val: 16000 },
    { label: 'Rápido (8s)', val: 8000 }
  ];
  let currentSpeedIdx = 0;
  speedBtn.addEventListener('click', () => {
    currentSpeedIdx = (currentSpeedIdx + 1) % speeds.length;
    slideDuration = speeds[currentSpeedIdx].val;
    speedBtn.textContent = speeds[currentSpeedIdx].label;
    if (isPlaying) {
      pauseSlideshow();
      startSlideshow();
    }
  });

  // Selector de capítulos
  chapterSelect.addEventListener('change', (e) => {
    const targetIdx = parseInt(e.target.value);
    goToSlide(targetIdx);
  });

  // Barra de progreso interactiva (seek)
  timelineProgress.addEventListener('click', (e) => {
    const rect = timelineProgress.getBoundingClientRect();
    const clickRatio = (e.clientX - rect.left) / rect.width;
    const targetIdx = Math.min(Math.floor(clickRatio * SLIDES.length), SLIDES.length - 1);
    goToSlide(targetIdx);
  });

  // Pantalla Completa
  fullscreenBtn.addEventListener('click', toggleFullscreen);

  // Botón Cambiar Canción
  document.getElementById('change-music-btn').addEventListener('click', () => {
    document.getElementById('custom-music-input').click();
  });

  // Poblado del selector de capítulos
  populateChapters();
}

function populateChapters() {
  const chapterSelect = document.getElementById('chapter-select');
  chapterSelect.innerHTML = '';
  
  let currentChapter = '';
  SLIDES.forEach((s, idx) => {
    if (s.chapter !== currentChapter) {
      currentChapter = s.chapter;
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = `${s.year} · ${s.chapter}`;
      chapterSelect.appendChild(opt);
    }
  });
}

// Control del Slideshow
function startSlideshow() {
  isPlaying = true;
  document.getElementById('play-icon').className = 'fas fa-pause';
  
  const currentSlide = SLIDES[currentIndex];
  // Si la diapositiva actual tiene video, el temporizador esperará a que termine el video
  const videoElem = document.querySelector('.media-viewport video');
  if (videoElem && !videoElem.ended && !videoElem.paused) {
    return;
  }

  clearTimeout(slideTimer);
  timerStartTime = Date.now();
  timerRemaining = slideDuration;
  runSlideProgress();
}

function pauseSlideshow() {
  isPlaying = false;
  document.getElementById('play-icon').className = 'fas fa-play';
  clearTimeout(slideTimer);
  timerRemaining -= (Date.now() - timerStartTime);
}

function runSlideProgress() {
  clearTimeout(slideTimer);
  slideTimer = setTimeout(() => {
    if (isPlaying) {
      nextSlide();
    }
  }, timerRemaining);
}

function nextSlide() {
  if (currentIndex < SLIDES.length - 1) {
    renderSlide(currentIndex + 1, true);
  } else {
    // Al final, pausar en la última escena grandiosa
    pauseSlideshow();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    renderSlide(currentIndex - 1, true);
  }
}

function goToSlide(index) {
  renderSlide(index, true);
  if (isPlaying) {
    clearTimeout(slideTimer);
    timerStartTime = Date.now();
    timerRemaining = slideDuration;
    runSlideProgress();
  }
}

// Renderizado de Diapositiva
function renderSlide(index, animate = true) {
  currentIndex = index;
  const slide = SLIDES[index];
  const wrapper = document.getElementById('slide-wrapper');

  if (animate) {
    wrapper.classList.add('fade-out');
    setTimeout(() => {
      applySlideContent(slide);
      wrapper.classList.remove('fade-out');
      wrapper.classList.add('fade-in');
      setTimeout(() => wrapper.classList.remove('fade-in'), 600);
    }, 400);
  } else {
    applySlideContent(slide);
  }

  // Actualizar Timeline
  const percent = ((index + 1) / SLIDES.length) * 100;
  document.getElementById('timeline-fill').style.width = `${percent}%`;
  document.getElementById('slide-num').textContent = `${index + 1} / ${SLIDES.length}`;
  document.getElementById('current-time-text').textContent = `${slide.year} · ${slide.date}`;

  // Sincronizar Dropdown de Capítulos
  const chapterSelect = document.getElementById('chapter-select');
  let matchedChapterIdx = 0;
  for (let i = 0; i < chapterSelect.options.length; i++) {
    if (parseInt(chapterSelect.options[i].value) <= index) {
      matchedChapterIdx = chapterSelect.options[i].value;
    }
  }
  chapterSelect.value = matchedChapterIdx;
}

function applySlideContent(slide) {
  const mediaViewport = document.getElementById('media-viewport');
  const ambientBackdrop = document.getElementById('ambient-backdrop');

  // Actualizar Card Narrativa
  document.getElementById('chapter-name').textContent = slide.chapter;
  document.getElementById('date-badge').textContent = slide.date;
  document.getElementById('story-title').textContent = slide.title;
  document.getElementById('story-subtitle').textContent = slide.subtitle;
  document.getElementById('story-text').textContent = slide.text;

  // Cierre especial o cita final
  const quoteElem = document.getElementById('closing-quote');
  if (slide.type === 'grand_finale') {
    quoteElem.style.display = 'block';
    quoteElem.textContent = "« Un largo camino que sigue con una nueva vida fruto de nuestro amor »";
    mediaViewport.className = 'media-viewport grand-finale-frame';
  } else if (slide.type === 'reveal') {
    quoteElem.style.display = 'block';
    quoteElem.textContent = "« ¡¡Querida familia, vamos a ser papás!! »";
    mediaViewport.className = 'media-viewport reveal-frame';
  } else {
    quoteElem.style.display = 'none';
    mediaViewport.className = 'media-viewport';
  }

  // Renderizado de Medios
  mediaViewport.innerHTML = '';
  let ambientImg = '';

  if (slide.type === 'single' || slide.type === 'reveal') {
    const imgSrc = getMediaPath(slide.media[0]);
    ambientImg = imgSrc;
    mediaViewport.innerHTML = `
      <div class="single-img-container">
        <img src="${imgSrc}" alt="${slide.title}" class="single-img" />
      </div>
    `;
  } else if (slide.type === 'collage') {
    ambientImg = getMediaPath(slide.media[0]);
    if (slide.layout === 'dual') {
      mediaViewport.innerHTML = `
        <div class="collage-dual">
          <div class="collage-item"><img src="${getMediaPath(slide.media[0])}" alt="Foto 1" /></div>
          <div class="collage-item"><img src="${getMediaPath(slide.media[1])}" alt="Foto 2" /></div>
        </div>
      `;
    } else if (slide.layout === 'grid4') {
      mediaViewport.innerHTML = `
        <div class="collage-grid4">
          <div class="collage-item"><img src="${getMediaPath(slide.media[0])}" alt="Detalle 1" /></div>
          <div class="collage-item"><img src="${getMediaPath(slide.media[1])}" alt="Detalle 2" /></div>
          <div class="collage-item"><img src="${getMediaPath(slide.media[2])}" alt="Detalle 3" /></div>
          <div class="collage-item"><img src="${getMediaPath(slide.media[3])}" alt="Detalle 4" /></div>
        </div>
      `;
    } else if (slide.layout === 'grid5') {
      mediaViewport.innerHTML = `
        <div class="collage-grid5">
          <div class="collage-item hero-item"><img src="${getMediaPath(slide.media[0])}" alt="Hero" /></div>
          <div class="collage-item thumb-item"><img src="${getMediaPath(slide.media[1])}" alt="1" /></div>
          <div class="collage-item thumb-item"><img src="${getMediaPath(slide.media[2])}" alt="2" /></div>
          <div class="collage-item thumb-item"><img src="${getMediaPath(slide.media[3])}" alt="3" /></div>
        </div>
      `;
    }
  } else if (slide.type === 'video') {
    const videoSrc = getMediaPath(slide.media[0]);
    ambientImg = getMediaPath('2016_02_EscapadaMalaga_2.jpg');
    mediaViewport.innerHTML = `
      <div class="video-player-container">
        <video src="${videoSrc}" controls autoplay playsinline></video>
      </div>
    `;
    handleVideoSlide();
  } else if (slide.type === 'video_with_photo') {
    ambientImg = getMediaPath(slide.mediaPhoto);
    mediaViewport.innerHTML = `
      <div class="collage-video-photo">
        <div class="collage-item">
          <video src="${getMediaPath(slide.mediaVideo)}" controls autoplay playsinline></video>
        </div>
        <div class="collage-item">
          <img src="${getMediaPath(slide.mediaPhoto)}" alt="Foto Gato" />
        </div>
      </div>
    `;
    handleVideoSlide();
  } else if (slide.type === 'grand_finale') {
    ambientImg = getMediaPath(slide.media[1]); // Ecografía como ambiente
    mediaViewport.innerHTML = `
      <div class="collage-dual">
        <div class="collage-item" style="border: 2px solid var(--gold);">
          <div class="grand-finale-badge">El Inicio · 18 Enero 2015</div>
          <img src="${getMediaPath(slide.media[0])}" alt="Primera Foto Poema" />
        </div>
        <div class="collage-item" style="border: 2px solid #f2a8b6;">
          <div class="grand-finale-badge" style="background: linear-gradient(135deg, #f2a8b6 0%, #e5989b 100%);">El Milagro · Septiembre 2026</div>
          <img src="${getMediaPath(slide.media[1])}" alt="Ecografía Nuestro Bebé" />
        </div>
      </div>
    `;
  }

  // Actualizar fondo ambiental difuminado
  if (ambientImg) {
    ambientBackdrop.style.backgroundImage = `url('${encodeURI(ambientImg)}')`;
  }
}

// Manejador para diapositivas con video
function handleVideoSlide() {
  const video = document.querySelector('.media-viewport video');
  if (!video) return;

  // Atenuar música de fondo para escuchar el video
  const prevMusicVol = bgMusic.volume;
  bgMusic.volume = 0.12;

  video.onended = () => {
    bgMusic.volume = prevMusicVol;
    if (isPlaying) {
      nextSlide();
    }
  };

  video.onpause = () => {
    bgMusic.volume = prevMusicVol;
  };

  video.onplay = () => {
    bgMusic.volume = 0.12;
  };
}

// Modo Pantalla Completa
function toggleFullscreen() {
  const icon = document.getElementById('fullscreen-icon');
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => console.log(err));
    icon.className = 'fas fa-compress';
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      icon.className = 'fas fa-expand';
    }
  }
}

// Partículas doradas flotantes
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const particleCount = 45;
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.8,
      speedY: -(Math.random() * 0.4 + 0.15),
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.2,
      fadeSpeed: (Math.random() * 0.006 + 0.003) * (Math.random() > 0.5 ? 1 : -1)
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let p of particles) {
      p.y += p.speedY;
      p.x += p.speedX;
      p.alpha += p.fadeSpeed;

      if (p.alpha <= 0.15 || p.alpha >= 0.7) {
        p.fadeSpeed = -p.fadeSpeed;
      }

      if (p.y < -10) {
        p.y = canvas.height + 10;
        p.x = Math.random() * canvas.width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 202, 101, ${p.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(230, 202, 101, 0.5)';
      ctx.fill();
    }

    animFrameId = requestAnimationFrame(animate);
  }

  animate();
}
