// Datos cronológicos completos del Reportaje: ¡Vamos a ser Papás!
// Narrado por NOSOTROS (pareja) para toda nuestra familia y seres queridos
// De 2015 al 15 de Septiembre de 2026

const SLIDES = [
  // --- 2015: DONDE TODO COMENZÓ ---
  {
    id: 1,
    year: "2015",
    date: "18 de Enero de 2015",
    chapter: "Donde Todo Comenzó",
    title: "La noche que cambió nuestras vidas",
    subtitle: "Córdoba · El origen de nuestra historia",
    text: "Aquella noche del 18 de enero de 2015 en Córdoba, entre miradas cómplices, risas y una bachata dulce, supimos que estábamos hechos el uno para el otro. El 20 de enero empezó oficialmente la historia de amor más bonita de nuestras vidas.",
    type: "single",
    media: ["2015_01_PrimerFoto.JPG"]
  },
  {
    id: 2,
    year: "2015",
    date: "14 de Febrero de 2015",
    chapter: "Donde Todo Comenzó",
    title: "Nuestro Primer San Valentín",
    subtitle: "La magia de las casualidades",
    text: "La magia de las casualidades que solo el destino entiende: en nuestro primer San Valentín nos regalamos anillos mutuamente por sorpresa, pensando exactamente lo mismo sin saberlo. Dos almas conectadas desde el primer instante.",
    type: "single",
    media: ["2015_02_SanValentin.jpg"]
  },
  {
    id: 3,
    year: "2015",
    date: "2015",
    chapter: "Donde Todo Comenzó",
    title: "Nuestro Primer Nido",
    subtitle: "Construyendo nuestro hogar",
    text: "Ese mismo año nos fuimos a vivir juntos. Compramos nuestra primera cama y decoramos con tanta ilusión esa habitación que vio nacer y crecer todo lo que hoy somos.",
    type: "single",
    media: ["2015_03_NuestraPrimerHabitacion.jpg"]
  },
  {
    id: 4,
    year: "2015",
    date: "2015",
    chapter: "Donde Todo Comenzó",
    title: "Empieza la Colección",
    subtitle: "Coleccionando recuerdos juntos",
    text: "Cada rincón empezaba a llenarse de nuestra esencia, sumando momentos y construyendo nuestro futuro paso a paso.",
    type: "single",
    media: ["2015_04_EmpiezaColeccion.jpg"]
  },
  {
    id: 5,
    year: "2015",
    date: "2015",
    chapter: "Donde Todo Comenzó",
    title: "Nuestra Gran Pasión",
    subtitle: "Rumbo a Málaga sobre dos ruedas",
    text: "Las dos ruedas, la carretera y la libertad: hicimos nuestro primer viaje largo en moto rumbo a Málaga, la ciudad que se convirtió para siempre en nuestro refugio preferido.",
    type: "single",
    media: ["2015_05_NuestraPasion.jpg"]
  },
  {
    id: 6,
    year: "2015",
    date: "Verano 2015",
    chapter: "Donde Todo Comenzó",
    title: "Benalbeach: Nuestro Paraíso",
    subtitle: "Veranos que nunca olvidaremos",
    text: "Fuimos a Benalbeach, aquel complejo de apartamentos que se convirtió en nuestro lugar sagrado de vacaciones. Y en la playa, aquel chiringuito de noche con música y risas bajo las estrellas.",
    type: "collage",
    layout: "dual",
    media: ["2015_06_NuestroLugarVacaciones.jpg", "2015_06_NuestroLugarVacaciones_2.jpg"]
  },
  {
    id: 7,
    year: "2015",
    date: "Navidad 2015",
    chapter: "Donde Todo Comenzó",
    title: "Nuestra Primera Navidad Juntos",
    subtitle: "El mejor regalo somos nosotros",
    text: "Nuestra primera Navidad juntos llegó antes de lo que pudimos imaginar, envolviéndonos en el calor y la certeza de haber encontrado a nuestro verdadero hogar.",
    type: "single",
    media: ["2015_07_PrimeraNavidad.jpg"]
  },

  // --- 2016: NUEVOS HORIZONTES, MADRID Y LA FAMILIA CRECE ---
  {
    id: 8,
    year: "2016",
    date: "2016",
    chapter: "Nuevos Horizontes",
    title: "Escapadas que Alimentan el Alma",
    subtitle: "Málaga, bolos y KFC",
    text: "Cualquier rato libre era nuestra excusa perfecta para coger el coche e irnos a Málaga: comer en el KFC, jugar a los bolos y disfrutar de la vida sin preocupaciones.",
    type: "collage",
    layout: "dual",
    media: ["2016_01_EscapadaMalaga_1.jpg", "2016_02_EscapadaMalaga_2.jpg"]
  },
  {
    id: 9,
    year: "2016",
    date: "2016",
    chapter: "Nuevos Horizontes",
    title: "Disfrutando del Camino",
    subtitle: "La felicidad de viajar juntos",
    text: "Cualquier viaje juntos siempre fue la mejor de las aventuras.",
    type: "video",
    media: ["2016_03_EscapadasMalaga_3.mp4"]
  },
  {
    id: 10,
    year: "2016",
    date: "2016",
    chapter: "Nuevos Horizontes",
    title: "El Gran Salto a Madrid",
    subtitle: "Apoyándonos incondicionalmente",
    text: "En 2016 terminaron los estudios de informática y surgió la oportunidad de Madrid. Daba vértigo salir de nuestra ciudad, pero el apoyo mutuo y la confianza en nosotros nos dieron alas. Estas fotos son del día que celebramos la noticia de la contratación, entre lágrimas de emoción.",
    type: "collage",
    layout: "dual",
    media: ["2016_04_Madrid_1.jpg", "2016_05_Madrid_2.jpg"]
  },
  {
    id: 11,
    year: "2016",
    date: "2016",
    chapter: "Nuevos Horizontes",
    title: "Nuestra Casita en Villalba",
    subtitle: "Más de 8 años de amor inmenso",
    text: "La casita que alquilamos en Madrid y que, sin sospecharlo, ocuparía más de 8 años de nuestra vida. Cuatro paredes que vieron crecer un amor inmenso y sincero.",
    type: "collage",
    layout: "dual",
    media: ["2016_06_1_Casita.jpg", "2016_06_2_Casita.jpg"]
  },
  {
    id: 12,
    year: "2016",
    date: "2016",
    chapter: "Nuevos Horizontes",
    title: "La Familia Crece: Llega 'Gato'",
    subtitle: "Nuestro pequeño rubio, naranjita tirando a dorado",
    text: "En esa casa llegó 'Gato', nuestro pequeño rubio travieso, naranjita tirando a dorado, al que adoramos con locura. Desde el primer instante llenó el hogar de juegos, ronroneos y felicidad.",
    type: "video_with_photo",
    mediaVideo: "2016_06_Madrid_3_Familia_Crece.mp4",
    mediaPhoto: "2016_06_Madrid_3_Familia_Crece_Gato_Se_une_a_la_familia.jpg"
  },
  {
    id: 13,
    year: "2016",
    date: "2016",
    chapter: "Nuevos Horizontes",
    title: "Despidiendo Nuestra Primera Moto",
    subtitle: "Cerrando una etapa",
    text: "Al mudarnos a Madrid tuvimos que vender nuestra primera moto con mucha nostalgia... pero sabiendo que nos esperaban muchos proyectos por cumplir.",
    type: "single",
    media: ["2016_07_Adios_Primera_Moto.jpg"]
  },
  {
    id: 14,
    year: "2016",
    date: "2016",
    chapter: "Nuevos Horizontes",
    title: "Hola Nueva Moto: La Pasión Continúa",
    subtitle: "Más grande y listas para más rutas",
    text: "Echábamos tanto de menos nuestra pasión que compramos una moto más grande que nos dio y nos sigue dando incontables alegrías y kilómetros juntos.",
    type: "collage",
    layout: "dual",
    media: ["2016_08_1_Hola_Nueva_Moto.jpg", "2016_08_2_Nueva_moto.jpg"]
  },

  // --- 2019: LA TEMPESTAD Y EL APRENDIZAJE ---
  {
    id: 15,
    year: "2019",
    date: "18 de Diciembre de 2019",
    chapter: "La Tempestad y el Aprendizaje",
    title: "Una Pausa Necesaria en el Camino",
    subtitle: "Aprender para valorar",
    text: "El 18 de diciembre de 2019 nos separamos. Fue el momento más duro de nuestras vidas, pero a la vez lo mejor que nos pudo pasar: marcó un antes y un después para reflexionar, sanar y darnos cuenta de lo mucho que nos necesitábamos y amábamos.",
    type: "single",
    media: ["2019_01_Separacion.jpg"]
  },
  {
    id: 16,
    year: "2019",
    date: "Diciembre 2019",
    chapter: "La Tempestad y el Aprendizaje",
    title: "Sueños Aparcados",
    subtitle: "Esperando en silencio",
    text: "Dejamos los sueños aparcados... el coche y la moto parados en el garaje, como esperando en silencio a que volviera la claridad a nuestras vidas.",
    type: "single",
    media: ["2019_02_Sueños_Aparcados.jpg"]
  },
  {
    id: 17,
    year: "2019",
    date: "Diciembre 2019",
    chapter: "La Tempestad y el Aprendizaje",
    title: "Echándonos de Menos",
    subtitle: "El vacío en el hogar",
    text: "Días difíciles en los que la distancia pesaba en cada rincón y cada silencio de la casa.",
    type: "single",
    media: ["2019_03_EchandoDeMenos.jpg"]
  },
  {
    id: 18,
    year: "2019",
    date: "Diciembre 2019",
    chapter: "La Tempestad y el Aprendizaje",
    title: "Apoyo en Tiempos Grises",
    subtitle: "Sanando para volver a florecer",
    text: "Incluso Gato buscó refugio en su amigo del vecindario... Un tiempo de aprendizaje que nos preparó para renacer mucho más unidos y maduros.",
    type: "single",
    media: ["2019_04_Apoyo_de_Amigos.jpg"]
  },

  // --- 2020: EL REENCUENTRO Y LA MADUREZ ---
  {
    id: 19,
    year: "2020",
    date: "Febrero de 2020",
    chapter: "El Reencuentro y la Madurez",
    title: "Volver a Empezar, Mejor que Nunca",
    subtitle: "Un amor renovado y consciente",
    text: "En febrero de 2020 volvimos a empezar poco a poco, sin prisas, mejorando lo que nos hizo tropezar, prometiendo olvidar el pasado y recomenzar de nuevo sin resentimientos. Y con nosotros, nuestra pasión en moto volvió más viva que nunca.",
    type: "single",
    media: ["2020_01_NuestraPasionVolvióMejorQueNunca.jpg"]
  },
  {
    id: 20,
    year: "2020",
    date: "2020",
    chapter: "El Reencuentro y la Madurez",
    title: "Y Nuestra Gula También",
    subtitle: "Celebrando la vida juntos",
    text: "Y con la felicidad recuperada, volvió también nuestra pasión compartida por comer rico, reírnos a carcajadas y saborear cada momento juntos.",
    type: "single",
    media: ["2020_02_Y_Nuestra_gula_también.jpg"]
  },
  {
    id: 21,
    year: "2020",
    date: "2020",
    chapter: "El Reencuentro y la Madurez",
    title: "La Paz en el Corazón",
    subtitle: "Todo volvió a la tranquilidad",
    text: "La calma serena inundó de nuevo nuestras vidas. La certeza absoluta de estar en el lugar correcto, con la persona indicada.",
    type: "single",
    media: ["2020_03_TodoVolvióALaTranquilidad.jpg"]
  },
  {
    id: 22,
    year: "2020",
    date: "2020",
    chapter: "El Reencuentro y la Madurez",
    title: "Vacaciones como Terapia",
    subtitle: "Alimentando el amor",
    text: "Nuestras escapadas volvieron a ser la mejor medicina para nutrir y cuidar nuestro amor frente al mar.",
    type: "single",
    media: ["2020_04_NuestrasVacacionesComoTerapia.jpg"]
  },
  {
    id: 23,
    year: "2020",
    date: "2020",
    chapter: "El Reencuentro y la Madurez",
    title: "Marbella: Nuevos Destinos por Descubrir",
    subtitle: "Estrenando una nueva etapa",
    text: "Seguimos sumando destinos y horizontes, celebrando un amor maduro, sólido e indestructible en las costas de Marbella.",
    type: "collage",
    layout: "dual",
    media: ["2020_05_PeroEstrenandoNuevaVidaEnNuevoDestino.jpg", "2020_06_PeroEstrenandoNuevoDestino.jpg"]
  },

  // --- 2022: SUMANDO EXPERIENCIAS ---
  {
    id: 24,
    year: "2022",
    date: "Navidad de 2022",
    chapter: "Sumando Experiencias",
    title: "El Manantial de los Sueños",
    subtitle: "Navidades mágicas",
    text: "Siempre inventando planes juntos para sumar experiencias: una Navidad mágica en El Manantial de los Sueños, soñando despiertos como dos niños.",
    type: "single",
    media: ["2022_01_SumandoExperiencias.jpg"]
  },
  {
    id: 25,
    year: "2022",
    date: "2022",
    chapter: "Sumando Experiencias",
    title: "Y Miles de Kilómetros Juntos",
    subtitle: "Curvas y complicidad",
    text: "Ruta tras ruta, sumando paisajes, viento y complicidad en cada curva de la carretera.",
    type: "single",
    media: ["2022_02_Y_Kilometros.jpg"]
  },

  // --- 2024: EL GRAN AÑO: BODA Y HOGAR PROPIO ---
  {
    id: 26,
    year: "2023",
    date: "Mayo de 2023",
    chapter: "El Gran Compromiso",
    title: "La Pedida de Matrimonio",
    subtitle: "Mayo de 2023 · El paso más esperado",
    text: "En mayo de 2023 dimos uno de los pasos más emocionantes de nuestras vidas: mirarnos a los ojos, sellar nuestro amor con una pedida inolvidable y prometer caminar juntos hacia el altar.",
    type: "single",
    media: ["2023_01_Pedida.jpg"]
  },
  {
    id: 27,
    year: "2024",
    date: "2024",
    chapter: "Nuestra Boda Soñada",
    title: "Preparativos con Dudas...",
    subtitle: "Pruebas en el camino",
    text: "Reservamos hotel en Córdoba para la celebración, pero al ir a verlo no era lo que esperábamos: el césped descuidado, las zonas no terminaban de convencernos...",
    type: "collage",
    layout: "dual",
    media: ["2024_02_1_PreparandoBodaConDudas.jpg", "2024_02_2_PreparandoBodaConDudas.jpg"]
  },
  {
    id: 28,
    year: "2024",
    date: "2024",
    chapter: "Nuestra Boda Soñada",
    title: "...Pero Mirando Hacia Nuestro Gran Paso",
    subtitle: "Confianza y fe absoluta en nosotros",
    text: "Pero teníamos confianza y fe en nosotros. Miramos hacia adelante con ilusión y enviamos las invitaciones para sellar nuestro gran día.",
    type: "single",
    media: ["2024_03_PeroMirandoSiempreHaciaNuestroGranPaso.jpg"]
  },
  {
    id: 29,
    year: "2024",
    date: "Abril de 2024",
    chapter: "Nuestra Boda Soñada",
    title: "Cuidando Cada Detalle con Cariño",
    subtitle: "Flores, sillas, arco y jamón",
    text: "Preparamos hasta el más mínimo detalle con todo nuestro cariño para todos vosotros: el arco, las flores, las sillas, la comida y el jamón.",
    type: "collage",
    layout: "grid4",
    media: ["2024_04_01_CuidandoDetalles.jpg", "2024_04_02_CuidandoDetalles.jpg", "2024_04_03_CuidandoDetalles.jpg", "2024_04_04_CuidandoDetalles.jpg"]
  },
  {
    id: 30,
    year: "2024",
    date: "Abril de 2024",
    chapter: "Nuestra Boda Soñada",
    title: "Nuestra Última Cita como Novios",
    subtitle: "Despidiendo una etapa maravillosa",
    text: "La fecha se acercaba y tuvimos nuestra última velada como 'Novios' antes de casarnos: sabiendo que a partir de ese momento nunca más volveríamos a ser solteros ni novios, sino marido y mujer para toda la vida.",
    type: "collage",
    layout: "dual",
    media: ["2024_05_01_UltimaCitaNovios.jpg", "2024_05_02_UltimaCitaNovios.jpg"]
  },
  {
    id: 31,
    year: "2024",
    date: "18 de Abril de 2024",
    chapter: "Nuestra Boda Soñada",
    title: "18 de Abril: 'Sí, Quiero' ante Notario",
    subtitle: "En Villalba, nuestro hogar",
    text: "El 18 de Abril de 2024 nos casamos ante notario en Villalba, la ciudad que tanto nos vio crecer en lo personal, profesional y sentimental.",
    type: "single",
    media: ["2024_06_Boda_Notario.jpg"]
  },
  {
    id: 32,
    year: "2024",
    date: "20 de Abril de 2024",
    chapter: "Nuestra Boda Soñada",
    title: "20 de Abril: ¡Nuestra Gran Boda!",
    subtitle: "Rodeados de los que más amamos",
    text: "El 20 de Abril celebramos nuestra boda con vosotros, nuestra querida familia y amigos. ¡El día más radiante, alegre y feliz de nuestras vidas!",
    type: "single",
    media: ["2024_07_Boda.jpg"]
  },
  {
    id: 33,
    year: "2024",
    date: "Mayo de 2024",
    chapter: "Nuestra Boda Soñada",
    title: "Luna de Miel en Cancún",
    subtitle: "El paraíso de recién casados",
    text: "Nuestra luna de miel soñada en Cancún: sol, playas de ensueño y la celebración más dulce de un amor consolidado para siempre.",
    type: "collage",
    layout: "dual",
    media: ["2024_08_01_Cancún.jpg", "2024_08_02_Cancún.jpg"]
  },
  {
    id: 34,
    year: "2024",
    date: "2024",
    chapter: "El Sueño de la Casa Propia",
    title: "Un Sueño Olvidado que Vuelve a Latir",
    subtitle: "Nuestra propia casa",
    text: "Y al volver de Cancún, otro gran sueño volvió a despertar con fuerza: tener nuestra propia casa en propiedad, nuestro chalet independiente. 2024 tenía que ser nuestro año completo.",
    type: "single",
    media: ["2024_09_Nueva_Casa.jpg"]
  },
  {
    id: 35,
    year: "2024",
    date: "2024",
    chapter: "El Sueño de la Casa Propia",
    title: "Dejando Nuestra Casita de Villalba",
    subtitle: "Gracias por 8 años inolvidables",
    text: "Dejamos la casita de alquiler con mucha nostalgia pero con una emoción enorme: nuestra nueva casa, nuestro propio hogar soñado, estaba esperándonos.",
    type: "collage",
    layout: "grid5",
    media: ["2024_10_1_DejandoCasa.jpg", "2024_10_2_DejandoCasa.jpg", "2024_10_3_DejandoCasa.jpg", "2024_10_4_DejandoCasa.jpg", "2024_10_5_DejandoCasa.jpg"]
  },
  {
    id: 36,
    year: "2024",
    date: "2024",
    chapter: "El Sueño de la Casa Propia",
    title: "¡Otro Sueño Cumplido!",
    subtitle: "Bienvenidos a Villa Memesitos",
    text: "Entrar por fin en nuestro propio hogar, sabiendo que cada rincón es fruto de nuestro esfuerzo conjunto, trabajo y amor incondicional.",
    type: "collage",
    layout: "dual",
    media: ["2024_11_1_OtroSueñoCumplido.jpg", "2024_11_2_OtroSueñoCumplido.jpg"]
  },

  // --- 2025 - 2026: LA FAMILIA Y EL MAYOR PROPÓSITO ---
  {
    id: 37,
    year: "2025",
    date: "2025",
    chapter: "Hogar, Familia y Esperanza",
    title: "Seguimos Sumando Juntos",
    subtitle: "Aumentando el amor",
    text: "En esta nueva casa seguimos sumando días felices y aumentando nuestro amor día a día en cada despertar.",
    type: "single",
    media: ["2025_01_SeguimosSumando.jpg"]
  },
  {
    id: 38,
    year: "2025",
    date: "2025",
    chapter: "Hogar, Familia y Esperanza",
    title: "La Familia Crece: Llega 'Mini'",
    subtitle: "Un hermanito para Gato",
    text: "Nuestra familia aumentó: llegó 'Mini', nuestro pequeño gatito que trajo el doble de mimos, juegos y ternura a nuestro hogar.",
    type: "single",
    media: ["2025_02_FamiliaCreciendo_Mini.jpg"]
  },
  {
    id: 39,
    year: "2026",
    date: "2026",
    chapter: "Hogar, Familia y Esperanza",
    title: "Celebrando Nuestro Aniversario",
    subtitle: "El amor que no deja de crecer",
    text: "Celebrando nuestros aniversarios de boda con la misma ilusión y amor sincero del primer día.",
    type: "single",
    media: ["2026_03_AniversarioBoda.jpg"]
  },
  {
    id: 40,
    year: "2026",
    date: "2026",
    chapter: "Hogar, Familia y Esperanza",
    title: "Cuidándonos en Cada Detalle",
    subtitle: "El amor en las pequeñas cosas",
    text: "Esos gestos únicos que lo dicen todo: cuidándonos mutuamente con infinita ternura hasta en el más mínimo detalle cotidiano.",
    type: "single",
    media: ["2026_04_CuidandoASuMarido.jpg"]
  },
  {
    id: 41,
    year: "2026",
    date: "2026",
    chapter: "Hogar, Familia y Esperanza",
    title: "Picosín: La Señal que Nos Dio Fuerzas",
    subtitle: "Nuestro instinto de papás",
    text: "Llevábamos desde que nos mudamos intentando cumplir nuestro mayor propósito: formar una familia y tener a nuestro bebé... pero no venía. Tuvimos que recurrir a la Fecundación In Vitro. Y en pleno tratamiento, caído del cielo, apareció Picosín, un gorrión caído del nido al que nadie daba esperanzas. Nuestro instinto de papás nos dijo que teníamos que salvarlo juntos: era una señal de que podíamos con todo lo que nos propusiéramos. ¡Y contra todo pronóstico, salió adelante y creció hermoso!",
    type: "collage",
    layout: "dual",
    media: ["2026_05_EnMomentosDificilesLlegóNuevoIntegrante_Picosin.jpg", "2026_06_Y_en_contra_de_todo_salio_adelante.jpeg"]
  },

  // --- JULIO - AGOSTO 2026: EL VERANO DE LA FE Y 'EL ELEGIDO' ---
  {
    id: 42,
    year: "2026",
    date: "10 de Julio de 2026",
    chapter: "El Verano de la Fe",
    title: "Extracción FIV: Solo Uno... El Elegido",
    subtitle: "Celebrando el cumpleaños de la futura mamá",
    text: "Con paciencia, optimismo y nervios, el 10 de julio llegó el día de la extracción de óvulos para celebrar el cumpleaños de la futura mamá. Días después supimos que de todos los óvulos, solo 1 embrión fue viable para congelar a día 5. Pero nos mantuvimos con fe y optimismo: ¡este verano será nuestro verano, solo hacía falta uno si era el elegido!",
    type: "collage",
    layout: "dual",
    media: [
      "2026_07_01_ConPaciencia,Optimismo,y_nervios_llegó_la_extracción_de_ovulos_10_julio_para_celebrar_cumpleaños_de_la_futura_ma´´a.jpg",
      "2026_07_02_ConPaciencia,Optimismo,y_nervios_llegó_la_extracción_de_ovulos_10_julio_para_celebrar_cumpleaños_de_la_futura_mamá.jpg"
    ]
  },
  {
    id: 43,
    year: "2026",
    date: "Julio de 2026",
    chapter: "El Verano de la Fe",
    title: "La Velada de Ibai",
    subtitle: "Desconectar y recuperar la sonrisa",
    text: "A los pocos días fuimos a la Velada de Ibai para cambiar de ambiente, despejar la mente y mantener la sonrisa firme.",
    type: "single",
    media: ["2026_08_Verano_Increible_Velada.jpg"]
  },
  {
    id: 44,
    year: "2026",
    date: "Agosto de 2026",
    chapter: "El Verano de la Fe",
    title: "Cantabria: Nervios a Flor de Piel",
    subtitle: "Castro Urdiales",
    text: "Castro Urdiales, hermosos paisajes, mar y paseos en barco... pero nuestra mente y nuestro corazón estaban en otro lugar, junto a nuestro pequeño embrión que nos esperaba.",
    type: "single",
    media: ["2026_09_Cantabria_Pero_Nervios_a_flor_de_piel.jpg"]
  },
  {
    id: 45,
    year: "2026",
    date: "Agosto de 2026",
    chapter: "El Verano de la Fe",
    title: "Canarias: Más Lejos para Desconectar",
    subtitle: "Cuantos más km y más paraíso, menos penas",
    text: "Decidimos irnos más lejos: rumbo a Canarias. No era momento de lágrimas, sino de relajar el alma, brindar y confiar en que lo mejor estaba por llegar.",
    type: "collage",
    layout: "dual",
    media: ["2026_10_01_Mejor_Mas_Lejos_para_desconectar.jpg", "2026_10_02_Y_Alcohol_para_relajar.jpg"]
  },
  {
    id: 46,
    year: "2026",
    date: "Agosto de 2026",
    chapter: "El Verano de la Fe",
    title: "Rezando con Toda el Alma",
    subtitle: "Que todo salga bien",
    text: "Visitando cada iglesia para pedir juntos con fervor que todo saliera bien. Teníamos 1 embrión congelado, de la mejor clase (la A): ¡era el elegido!",
    type: "single",
    media: ["2026_11_Rezando_que_todo_salga_bien.jpg"]
  },
  {
    id: 47,
    year: "2026",
    date: "Agosto de 2026",
    chapter: "El Verano de la Fe",
    title: "Sin Olvidarnos de Disfrutar",
    subtitle: "Nos merecemos ser felices",
    text: "Disfrutando de la playa y el mar, recordándonos que nos merecíamos toda la felicidad del mundo.",
    type: "single",
    media: ["2026_12_Sin_Olvidarnos_De_disfrutar.jpg"]
  },
  {
    id: 48,
    year: "2026",
    date: "Agosto de 2026",
    chapter: "El Verano de la Fe",
    title: "Porque el Paraíso Hace Milagros...",
    subtitle: "Fe en el destino",
    text: "Dejándonos envolver por la magia del mar y la convicción de que los milagros existen.",
    type: "single",
    media: ["2026_13_Porque_el_paraiso_hace_milagros....jpg"]
  },
  {
    id: 49,
    year: "2026",
    date: "Agosto de 2026",
    chapter: "El Verano de la Fe",
    title: "Pidiendo Deseos al Genio",
    subtitle: "El mayor anhelo de nuestras vidas",
    text: "Por si acaso, pedimos ayuda hasta a las máquinas de los genios con el deseo más profundo que latía en nuestros corazones: ser papás.",
    type: "single",
    media: ["2026_14_Pero_Por_si_acaso_pedimos_ayuda_hasta_a_los_genios.jpg"]
  },
  {
    id: 50,
    year: "2026",
    date: "Agosto de 2026",
    chapter: "El Verano de la Fe",
    title: "Y al Volver...",
    subtitle: "Listos para nuestro gran momento",
    text: "Volvimos en el avión con una serenidad infinita en el pecho: sabíamos que este era nuestro año y nuestro momento.",
    type: "single",
    media: ["2026_15_Y_al_volver....jpg"]
  },

  // --- SEPTIEMBRE 2026: LA IMPLANTACIÓN Y EL MILAGRO ---
  {
    id: 51,
    year: "2026",
    date: "9 de Septiembre de 2026",
    chapter: "El Gran Milagro",
    title: "El Día de la Implantación",
    subtitle: "Más nervios que nunca · 'El Elegido'",
    text: "Día 9 de septiembre: con la cita en la mano y los nervios a flor de piel. Los dos juntos en la camilla, agarrados de la mano y sin soltarnos ni un segundo... recibiendo a nuestro único embrión clase A: 'El Elegido'.",
    type: "single",
    media: ["2026_16_Mas_NerviosQueNunca_la_implantacion_del_unico_embrion_que_obtuvimos_el_elegido....jpg"]
  },
  {
    id: 52,
    year: "2026",
    date: "Septiembre de 2026",
    chapter: "El Gran Milagro",
    title: "Esperando Nuestro Mayor Proyecto de Vida",
    subtitle: "Juntos hacia una nueva vida",
    text: "Esperando nuestro nuevo proyecto de vida juntos. Una sensación indescriptible de amor, emoción y esperanza absoluta.",
    type: "single",
    media: ["2026_17_EsperandoNuestroNuevoProyectoDeVidaJuntos.jpg"]
  },
  {
    id: 53,
    year: "2026",
    date: "Septiembre de 2026",
    chapter: "El Gran Milagro",
    title: "Nuestra Luz Alojada en Mamá",
    subtitle: "La ecografía de la esperanza",
    text: "Por ecografía nos mostraron dónde habían alojado al embrión: apenas unas pequeñas células, pero para nosotros ya era la luz más hermosa y brillante del universo, alojada en el interior de la madre. Pero faltaba el sprint final: la Betaespera.",
    type: "single",
    media: ["2026_18_NuestraUnicaOportunidadAlojadaEnLaMami.jpg"]
  },
  {
    id: 54,
    year: "2026",
    date: "Septiembre de 2026",
    chapter: "El Gran Milagro",
    title: "La Betaespera: Mami Reposando",
    subtitle: "Cuidando la vida con devoción",
    text: "Días eternos donde la madre reposaba y se cuidaba en cuerpo y alma para que el embrión encontrara su hogar, mientras el padre cuidaba de la madre con devoción en cada segundo, acunando juntos a nuestro futuro hijo.",
    type: "single",
    media: ["2026_19_MamiReposandoParaQueTodoVayaBien.jpg"]
  },
  {
    id: 55,
    year: "2026",
    date: "15 de Septiembre de 2026",
    chapter: "¡¡VAMOS A SER PAPÁS!!",
    title: "¡¡NUESTRO PRIMER TEST POSITIVO EN 2 AÑOS!!",
    subtitle: "¡¡LO LOGRAMOS JUNTOS!!",
    text: "¡Y POR FIN EL 15 DE SEPTIEMBRE! Dos rayitas bien marcadas... Nuestro primer test de embarazo positivo en más de dos años de lucha, angustia y esperanza. ¡¡LO LOGRAMOS!! ¡¡QUERIDA FAMILIA, VAMOS A SER PAPÁS!!",
    type: "reveal",
    media: ["2026_20_PrimerPositivo.jpg"]
  },

  // --- CIERRE EMOCIONAL FINAL: EL ORIGEN Y EL FRUTO DE NUESTRO AMOR ---
  {
    id: 56,
    year: "2015 - 2026",
    date: "Para Siempre",
    chapter: "El Fruto de Nuestro Amor",
    title: "Un largo camino que sigue con una nueva vida fruto de nuestro amor",
    subtitle: "Donde empezó todo... y donde florece el futuro de nuestra familia",
    text: "Desde aquella primera noche de bachata en 2015 donde comenzó nuestra historia, hasta este milagro de vida que hoy late con nosotros. Un camino de más de 10 años lleno de esfuerzo, aprendizaje y amor incondicional que hoy da su fruto más hermoso. ¡Querida familia, comienza la mejor etapa de nuestras vidas: vamos a ser papás!",
    type: "grand_finale",
    media: ["mi_ninia_y_yo.jpg", "2026_18_NuestraUnicaOportunidadAlojadaEnLaMami.jpg"]
  }
];
