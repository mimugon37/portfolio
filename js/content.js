// Todo el texto del sitio vive acá. ES por defecto, EN con el botón de la barra.
// Lo marcado con [completar] o [confirmar] es placeholder: cambialo por tu info real.

const IMG = 'assets/img/';
const MOODDIR = 'assets/mood/';

export const UI = {
  es: {
    days: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
    months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    menus: { file: 'Archivo', go: 'Ir', window: 'Ventana', help: 'Ayuda' },
    menu: {
      about: 'Acerca de Mia', restart: 'Reiniciar…', off: 'Apagar…',
      newFinder: 'Nueva ventana del Finder', close: 'Cerrar ventana', closeAll: 'Cerrar todo',
      tidy: 'Ordenar el escritorio', mess: 'Desordenar el escritorio',
      help: 'Cómo usar este escritorio',
    },
    script: 'Mia González', big: 'portfolio', year: '(2026)',
    strap: 'diseño · 3D · contenido · oratoria · organización',
    hint: 'doble click para abrir, arrastrá todo lo que quieras',
    hintTouch: 'tocá para abrir',
    helpText: 'Es mi escritorio. Las carpetas son proyectos, el dock tiene apps con lo que sé hacer, y las fotos son mi moodboard. Podés arrastrar, tirar y abrir todo.',
    apps: {
      finder: 'Finder', notes: 'Notas', keynote: 'Vista previa', reminders: 'Recordatorios',
      photos: 'Fotos', terminal: 'Terminal', mail: 'Mail', music: 'Música', trash: 'Papelera', preview: 'Vista previa', about: 'Acerca de Mia',
    },
    folders: { projects: 'proyectos', skills: 'habilidades', moodboard: 'moodboard' },
    sidebar: { fav: 'Favoritos', tags: 'Etiquetas', desktop: 'Escritorio' },
    items: 'ítems',
    back: 'Atrás',
    info: { year: 'Año', team: 'Equipo', role: 'Mi rol', tools: 'Herramientas', kind: 'Tipo' },
    open: 'Abrir',
    soon: 'captura pendiente',
    soonNote: 'Acá van las capturas. Cuando me las pases, las subo.',
    planifyNote: 'Pantalla de muestra recreada. Si tenés capturas reales, las cambio.',
    skillsCols: ['Nombre', 'Lo uso para', 'Tipo'],
    hard: 'Herramientas', soft: 'Habilidades blandas',
    app: 'Aplicación', human: 'Habilidad',
    trashEmpty: 'Vaciar', trashDone: 'La papelera está vacía. Así me gusta ♡',
    shutdown: 'chau ♡', shutdownSub: 'click para volver a prender',
    mailTo: 'Para', mailSubject: 'Asunto', mailSubjectVal: '¡Hola Mia!', mailBody: 'Contame tu idea…', send: 'Enviar',
    terminalHello: 'Escribí help para ver los comandos.',
  },
  en: {
    days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    menus: { file: 'File', go: 'Go', window: 'Window', help: 'Help' },
    menu: {
      about: 'About Mia', restart: 'Restart…', off: 'Shut Down…',
      newFinder: 'New Finder Window', close: 'Close Window', closeAll: 'Close All',
      tidy: 'Tidy up the desktop', mess: 'Mess up the desktop',
      help: 'How to use this desktop',
    },
    script: 'Mia González', big: 'portfolio', year: '(2026)',
    strap: 'design · 3D · content · public speaking · organization',
    hint: 'double click to open, drag anything you like',
    hintTouch: 'tap to open',
    helpText: 'This is my desktop. Folders are projects, the dock has apps for what I can do, and the photos are my moodboard. Drag, toss and open everything.',
    apps: {
      finder: 'Finder', notes: 'Notes', keynote: 'Preview', reminders: 'Reminders',
      photos: 'Photos', terminal: 'Terminal', mail: 'Mail', music: 'Music', trash: 'Trash', preview: 'Preview', about: 'About Mia',
    },
    folders: { projects: 'projects', skills: 'skills', moodboard: 'moodboard' },
    sidebar: { fav: 'Favorites', tags: 'Tags', desktop: 'Desktop' },
    items: 'items',
    back: 'Back',
    info: { year: 'Year', team: 'Team', role: 'My role', tools: 'Tools', kind: 'Kind' },
    open: 'Open',
    soon: 'screenshot pending',
    soonNote: 'Screenshots go here. Send them over and I will add them.',
    planifyNote: 'Recreated sample screen. Real screenshots can replace it.',
    skillsCols: ['Name', 'What I use it for', 'Kind'],
    hard: 'Tools', soft: 'Soft skills',
    app: 'Application', human: 'Skill',
    trashEmpty: 'Empty', trashDone: 'The trash is empty. Just how I like it ♡',
    shutdown: 'bye ♡', shutdownSub: 'click to turn it back on',
    mailTo: 'To', mailSubject: 'Subject', mailSubjectVal: 'Hi Mia!', mailBody: 'Tell me about your idea…', send: 'Send',
    terminalHello: 'Type help to see the commands.',
  },
};

// Canción del widget de música (reproductor oficial de Spotify)
export const MUSIC = { title: 'Fire for You', artist: 'Cannons', youtube: 'DVOmxLxmXuY' };

export const CONTACT = {
  mail: 'miagonzalb@gmail.com',
  rows: [
    ['Instagram', '@miagonzalb', 'https://instagram.com/miagonzalb'],
    ['LinkedIn', 'Mia Gonzalez Barandica', 'https://www.linkedin.com/search/results/all/?keywords=Mia%20Gonzalez%20Barandica'],
  ],
};

export const ABOUT = {
  es: {
    notes: [
      {
        id: 'me', title: 'Sobre mí', date: 'hoy', preview: 'Hola, soy Mia…',
        body: [
          ['h', 'Hola, soy Mia.'],
          ['p', 'Curso 5to año de la orientación TIC en ORT, en Buenos Aires. Diseño interfaces y marcas, modelo en 3D, edito video y preparo presentaciones. Lo que más disfruto es tomar una idea todavía desordenada y convertirla en algo claro, cuidado y fácil de usar.'],
          ['p', 'Soy una apasionada de la literatura y de la cinematografía. Leer y mirar películas me enseñó a pensar en historias, en ritmo y en encuadres, y esa mirada aparece en todo lo que diseño.'],
          ['p', 'Mi trabajo no se limita al diseño: disfruto tanto de organizar un proyecto como de diseñarlo. Planifico los tiempos, distribuyo las tareas, preparo el pitch y lo presento.'],
          ['list', ['Base: Buenos Aires, Argentina', 'Estudios: ORT · 5to año, orientación TIC', 'Idiomas: español nativo, inglés C1–C2 (Proficiency)']],
        ],
      },
      {
        id: 'how', title: 'Cómo trabajo', date: 'ayer', preview: 'Primero organizo, después diseño…',
        body: [
          ['h', 'Cómo trabajo'],
          ['p', 'Primero organizo: qué hay que hacer, para cuándo y quién se ocupa de cada parte. Después reúno referencias en un moodboard. Recién entonces empiezo a diseñar en Figma.'],
          ['p', 'Busco que cada pieza transmita una sola idea clara y que el detalle final (una animación, una textura, una tipografía) sea lo que la vuelva memorable.'],
        ],
      },
      {
        id: 'off', title: 'Fuera de la pantalla', date: 'martes', preview: 'Handball, River…',
        body: [
          ['h', 'Fuera de la pantalla'],
          ['p', 'Juego al handball en River Plate. El deporte en equipo me enseñó a coordinar con otros, a manejar la presión y a comunicar con claridad cuando hace falta, algo que aplico en cada proyecto.'],
        ],
      },
    ],
    aboutSpecs: [
      ['Chip', 'Curiosidad M4 Max'],
      ['Memoria', '16 GB de referencias'],
      ['Disco', 'Moodboards infinitos'],
      ['Ubicación', 'Buenos Aires, AR'],
      ['Sistema', 'ORT · 5to TIC'],
    ],
    aboutRole: 'Diseñadora · 3D · contenido',
  },
  en: {
    notes: [
      {
        id: 'me', title: 'About me', date: 'today', preview: "Hi, I'm Mia…",
        body: [
          ['h', "Hi, I'm Mia."],
          ['p', "I'm in my final year of the IT track at ORT in Buenos Aires. I design interfaces and brands, model in 3D, edit video and prepare presentations. What I enjoy most is taking an idea that is still messy and turning it into something clear, polished and easy to use."],
          ['p', "I'm passionate about literature and cinema. Reading and watching films taught me to think in stories, rhythm and framing, and that way of seeing shows up in everything I design."],
          ['p', 'My work goes beyond design: I enjoy organizing a project as much as designing it. I plan the timeline, assign the tasks, prepare the pitch and present it.'],
          ['list', ['Based in: Buenos Aires, Argentina', 'Studies: ORT · final year, IT track', 'Languages: native Spanish, English C1–C2 (Proficiency)']],
        ],
      },
      {
        id: 'how', title: 'How I work', date: 'yesterday', preview: 'First I organize, then I design…',
        body: [
          ['h', 'How I work'],
          ['p', 'First I organize: what needs to be done, by when and who handles each part. Then I gather references in a moodboard. Only then do I start designing in Figma.'],
          ['p', 'I aim for every piece to convey one clear idea, and for the final detail (a motion, a texture, a typeface) to be what makes it memorable.'],
        ],
      },
      {
        id: 'off', title: 'Off screen', date: 'Tuesday', preview: 'Handball, River…',
        body: [
          ['h', 'Off screen'],
          ['p', 'I play handball for River Plate. Team sports taught me to coordinate with others, handle pressure and communicate clearly when it matters, something I bring to every project.'],
        ],
      },
    ],
    aboutSpecs: [
      ['Chip', 'Curiosity M4 Max'],
      ['Memory', '16 GB of references'],
      ['Storage', 'Endless moodboards'],
      ['Location', 'Buenos Aires, AR'],
      ['System', 'ORT · IT senior year'],
    ],
    aboutRole: 'Designer · 3D · content',
  },
};

export const PROJECTS = [
  {
    id: 'c3po', year: '2026',
    tools: 'Figma · Blender · Photoshop · CapCut',
    files: [
      { src: IMG + 'c3po-app-01.webp', name: 'consola_01.png' },
      { src: IMG + 'c3po-app-02.webp', name: 'consola_02.png' },
      { src: IMG + 'c3po-app-03.webp', name: 'consola_03.png' },
      { src: IMG + 'c3po-app-04.webp', name: 'consola_04.png' },
      { src: IMG + 'c3po-app-05.webp', name: 'consola_05.png' },
      { src: IMG + 'pitch-02.webp', name: 'pitch_02.png' },
      { src: IMG + 'robot-presentando.webp', name: 'render_presentando.png' },
      { src: IMG + 'robot-saludando.webp', name: 'render_saludando.png' },
    ],
    es: {
      title: 'C3PO', tag: 'Robot humanoide · App · Marca', team: 'Equipo de 4',
      role: 'UX/UI, identidad, pitch y marketing',
      lede: 'Una consola web para manejar un robot humanoide Unitree G1 hablándole en lenguaje natural.',
      sections: [
        ['El desafío', 'Un robot de 29 articulaciones da miedo de usar. La idea fue que cualquiera pudiera pedirle cosas como le habla a una persona, y que la pantalla se sintiera como una sala de control tranquila.'],
        ['La interfaz', 'Estado del robot, mapa en vivo, cámaras, chat y control por voz. Fondo casi negro y un solo acento: todo el ruido queda afuera para que el robot sea lo importante.'],
        ['Más allá de la app', 'Diseñé el logo, el pitch interactivo, la cuenta de Instagram @c3po.ok con su calendario editorial y las piezas para la Expo.'],
      ],
      cta: ['Ver el pitch ↗', 'https://c3po-pitch.vercel.app'],
    },
    en: {
      title: 'C3PO', tag: 'Humanoid robot · App · Brand', team: 'Team of 4',
      role: 'UX/UI, identity, pitch and marketing',
      lede: 'A web console for driving a Unitree G1 humanoid robot by talking to it in natural language.',
      sections: [
        ['The challenge', 'A robot with 29 joints is scary to use. The goal was for anyone to ask it for things the way they would ask a person, and for the screen to feel like a calm control room.'],
        ['The interface', 'Robot status, live map, cameras, chat and voice control. Near-black background and a single accent: the noise stays out so the robot stays the focus.'],
        ['Beyond the app', 'I designed the logo, the interactive pitch, the @c3po.ok Instagram with its content calendar, and the pieces for the Expo.'],
      ],
      cta: ['See the pitch ↗', 'https://c3po-pitch.vercel.app'],
    },
  },
  {
    id: 'coopid', year: '2026',
    tools: 'Figma · Illustrator · Photoshop',
    titleFont: "'ChocoTaste', serif",
    files: [
      { src: IMG + 'coopid-manual-01.webp', name: 'manual_p01.png' },
      { src: IMG + 'coopid-manual-04.webp', name: 'manual_p04.png' },
      { src: IMG + 'coopid-manual-06.webp', name: 'manual_p06.png' },
      { src: IMG + 'coopid-manual-10.webp', name: 'manual_p10.png' },
      { src: IMG + 'coopid-manual-12.webp', name: 'manual_p12.png' },
      { src: IMG + 'coopid-manual-13.webp', name: 'manual_p13.png' },
    ],
    es: {
      title: 'coopid', tag: 'Identidad de marca · Landing', team: 'Proyecto de UX/UI',
      role: 'Identidad, manual de marca y landing',
      lede: 'Brookies artesanales, horneados con amor. El flechazo entre el brownie y la cookie, convertido en marca.',
      sections: [
        ['El concepto', 'Un brookie es un brownie y una cookie que se enamoran en la misma placa. De ahí sale coopid: un cupido goloso, una flecha y un rojo flechazo.'],
        ['El sistema', 'Imagotipo vertical y horizontal, área de respeto, versiones positivo, negativo y monocromo, paleta Rojo Coopid #7C1B0C con crema #F2E8D5 y la tipografía Choco Taste.'],
        ['La landing', 'Una página que se come con los ojos: fotos de producto recortadas, textura de papel y el cupido apareciendo en cada sección.'],
      ],
    },
    en: {
      title: 'coopid', tag: 'Brand identity · Landing page', team: 'UX/UI class project',
      role: 'Identity, brand book and landing page',
      lede: 'Handmade brookies, baked with love. The crush between a brownie and a cookie, turned into a brand.',
      sections: [
        ['The concept', 'A brookie is a brownie and a cookie falling in love on the same tray. That is coopid: a sweet-toothed cupid, an arrow and a crush-red.'],
        ['The system', 'Vertical and horizontal lockups, clear space, positive, negative and mono versions, Coopid Red #7C1B0C with cream #F2E8D5 and the Choco Taste typeface.'],
        ['The landing', 'A page you eat with your eyes: cut-out product shots, paper texture and the cupid showing up in every section.'],
      ],
    },
  },
  {
    id: 'planify', year: '2024',
    tools: 'Figma · HTML/CSS · JS',
    files: [
      { src: IMG + 'planify-01.webp', name: 'inicio.png' },
      { src: IMG + 'planify-02.webp', name: 'iniciar_sesion.png' },
      { src: IMG + 'planify-03.webp', name: 'detalle_lugar.png' },
    ],
    es: {
      title: 'Planify', tag: 'Web app · Planes con amigos', team: 'Equipo de 3er año',
      role: 'UX/UI y dirección visual',
      lede: 'Una web para encontrar planes para hacer con tus amigos cerca de tu casa.',
      sections: [
        ['La idea', '"¿Qué hacemos hoy?" es la pregunta más difícil de un grupo de amigos. Planify junta lugares cerca tuyo y los ordena por lo que importa: si es al aire libre o cerrado y cuántos son.'],
        ['La estética', 'Un fondo de ondas suaves, un logo fino y un solo acento naranja para lo que se toca. Cada lugar tiene su ficha con foto grande, puntaje y link a su sitio.'],
      ],
    },
    en: {
      title: 'Planify', tag: 'Web app · Plans with friends', team: 'Sophomore-year team',
      role: 'UX/UI and visual direction',
      lede: 'A website for finding things to do with your friends near home.',
      sections: [
        ['The idea', '"What are we doing today?" is the hardest question for any group of friends. Planify gathers places near you and sorts them by what matters: indoors or outdoors, and how many of you there are.'],
        ['The look', 'A soft wave background, a thin logo and a single orange accent for everything you can tap. Each place has its own page with a big photo, a rating and a link to its site.'],
      ],
    },
  },
  {
    id: 'dead', year: '2025',
    tools: 'Blender · Unity · C#',
    files: [
      { src: IMG + 'dead-01.webp', name: 'escena_fabrica.png' },
      { src: IMG + 'dead-02.webp', name: 'escaleras.png' },
    ],
    es: {
      title: 'Dead Silence', tag: 'Videojuego 3D', team: 'Equipo de 4',
      role: 'Modelado en Blender y parte de la iluminación en Unity',
      lede: 'Un survival en 3D que hicimos en 4to año, en Blender y Unity.',
      sections: [
        ['El mundo', 'Todo pasa en una planta industrial abandonada: caños, máquinas gigantes tapadas con lonas y luces que parpadean. La ambientación tenía que contar la historia sin una sola línea de texto.'],
        ['El proceso', 'Yo modelé en Blender y me encargué de parte de la iluminación en Unity: la niebla verde, la luz baja y lo que queda en sombra. Ser 4 nos obligó a acordar una estética común y a repartir bien el trabajo.'],
        ['Lo que aprendí', 'A pensar un espacio como una historia: dónde mira el jugador, qué se ilumina y qué queda en sombra. Es lo mismo que hago hoy en una interfaz.'],
      ],
    },
    en: {
      title: 'Dead Silence', tag: '3D video game', team: 'Team of 4',
      role: 'Blender modeling and part of the lighting in Unity',
      lede: 'A 3D survival game we made in junior year, in Blender and Unity.',
      sections: [
        ['The world', 'It all happens in an abandoned industrial plant: pipes, huge machines under tarps and flickering lights. The environment had to tell the story without a single line of text.'],
        ['The process', 'I modeled in Blender and handled part of the lighting in Unity: the green fog, the low light and what stays in shadow. Being four meant agreeing on one look and splitting the work well.'],
        ['What I learned', 'To think of a space as a story: where the player looks, what gets lit and what stays in shadow. It is the same thing I do in an interface today.'],
      ],
    },
  },
];

PROJECTS.push({
  id: 'kate', year: '2026',
  tools: 'Figma',
  files: [
    { src: IMG + 'kate-01.webp', name: 'inicio.png' },
    { src: IMG + 'kate-02.webp', name: 'about_me.png' },
    { src: IMG + 'kate-03.webp', name: 'agencia.png' },
    { src: IMG + 'kate-04.webp', name: 'contacto.png' },
  ],
  es: {
    title: 'Kate Moss', tag: 'Web editorial · UX/UI', team: 'Trabajo individual',
    role: 'Diseño de la web completa',
    lede: 'Una web en blanco y negro sobre Kate Moss, pensada como una revista de moda.',
    sections: [
      ['La idea', 'Que la web se sienta editorial: fotos grandes en blanco y negro, mucho aire y tipografía limpia, para que la protagonista sea ella.'],
      ['Las pantallas', 'Inicio con su presentación, una galería "About me", la página de su agencia con tapas de Vogue y un cierre con contacto.'],
    ],
  },
  en: {
    title: 'Kate Moss', tag: 'Editorial website · UX/UI', team: 'Solo project',
    role: 'Design of the whole site',
    lede: 'A black and white website about Kate Moss, designed like a fashion magazine.',
    sections: [
      ['The idea', 'Make the site feel editorial: big black and white photos, lots of white space and clean type, so she stays the focus.'],
      ['The screens', 'A home with her intro, an "About me" gallery, her agency page with Vogue covers, and a closing contact page.'],
    ],
  },
});

// Herramientas: icon = clave de ICONS en main.js
export const SKILLS = {
  hard: [
    { icon: 'figma', name: 'Figma', es: 'Interfaces, prototipos y sistemas de diseño', en: 'Interfaces, prototypes and design systems' },
    { icon: 'ps', name: 'Photoshop', es: 'Retoque, collage y piezas para redes', en: 'Retouching, collage and social pieces' },
    { icon: 'ai', name: 'Illustrator', es: 'Logos, vectores e identidad (coopid)', en: 'Logos, vectors and identity (coopid)' },
    { icon: 'ae', name: 'After Effects', es: 'Motion y animación de piezas', en: 'Motion and animated pieces' },
    { icon: 'capcut', name: 'CapCut', es: 'Reels y video para Instagram', en: 'Reels and video for Instagram' },
    { icon: 'blender', name: 'Blender', es: 'Modelado 3D y renders (Dead Silence, C3PO)', en: '3D modeling and renders (Dead Silence, C3PO)' },
    { icon: 'unity', name: 'Unity', es: 'Videojuegos 3D (Dead Silence)', en: '3D games (Dead Silence)' },
    { icon: 'code', name: 'HTML · CSS · JS', es: 'Webs y prototipos que funcionan', en: 'Working websites and prototypes' },
    { icon: 'workspace', name: 'Docs · Sheets · Slides', es: 'Calendarios, planillas y presentaciones', en: 'Calendars, spreadsheets and decks' },
    { icon: 'terminal', name: 'Linux · Terminal', es: 'Base para ciberseguridad (aprendiendo)', en: 'Groundwork for cybersecurity (learning)' },
  ],
  soft: [
    { icon: 'keynote', open: 'keynote', es: ['Oratoria', 'Pitch y presentaciones frente a un público'], en: ['Public speaking', 'Pitches and talks in front of an audience'] },
    { icon: 'reminders', open: 'reminders', es: ['Organización', 'Calendarios, entregas y tareas de equipo'], en: ['Organization', 'Calendars, deadlines and team tasks'] },
    { icon: 'team', es: ['Trabajo en equipo', 'Equipos de 4 en C3PO y Dead Silence'], en: ['Teamwork', 'Teams of 4 on C3PO and Dead Silence'] },
    { icon: 'megaphone', es: ['Marketing y contenido', 'Estrategia de Instagram, influencers y anuncios'], en: ['Marketing & content', 'Instagram strategy, influencers and ads'] },
    { icon: 'globe', es: ['Inglés', 'Proficiency C1–C2'], en: ['English', 'Proficiency C1–C2'] },
  ],
};

export const SPEAKING = {
  slides: [IMG + 'pitch-01.webp', IMG + 'pitch-02.webp', IMG + 'pitch-03.webp'],
  es: {
    file: 'pitch_c3po.pdf',
    notesTitle: 'Notas del orador',
    notes: 'Pitch de C3PO: 10 minutos, 14 diapositivas. Lo armé para que venda de verdad, no para que parezca un trabajo del colegio: una idea por diapositiva, una demo simulada por si el robot no está en la sala y un cierre que se recuerde.',
    list: [
      ['Community Meetup', 'Presentamos C3PO en el Parque de la Innovación (semana del 30 de noviembre)'],
      ['Pitch de C3PO', 'Guion, diapositivas y presentación en vivo'],
      ['Versión en inglés', 'El mismo pitch, adaptado para presentarlo en inglés'],
      ['Plan de marketing', 'Presentaciones de equipo: contenido, influencers y precios'],
    ],
    live: 'Ver el pitch en vivo ↗',
  },
  en: {
    file: 'pitch_c3po.pdf',
    notesTitle: 'Presenter notes',
    notes: 'C3PO pitch: 10 minutes, 14 slides. I built it to actually sell, not to look like a school assignment: one idea per slide, a simulated demo in case the robot is not in the room, and a closing people remember.',
    list: [
      ['Community Meetup', 'We present C3PO at Parque de la Innovación (week of November 30)'],
      ['C3PO pitch', 'Script, slides and live delivery'],
      ['English version', 'The same pitch, adapted to present in English'],
      ['Marketing plan', 'Team presentations: content, influencers and pricing'],
    ],
    live: 'See the live pitch ↗',
  },
};

// Recordatorios. Cada ítem: [título, nota, hecho, fecha, marcado]
export const ORGANIZE = {
  es: [
    {
      list: 'C3PO', color: '#ff9500', items: [
        ['Presentar C3PO en el Community Meetup', 'Parque de la Innovación', false, 'Semana del 30/11', true],
        ['Ensayar el pitch con cronómetro', '10 minutos, 14 diapositivas', false, 'Semana del 23/11', false],
        ['Expo C3PO', 'Piezas, stand y lanzamiento', false, 'Marzo 2027', false],
        ['Versión en inglés del pitch', '', true],
        ['Demo simulada por si el robot no está', '', true],
      ],
    },
    {
      list: 'Marketing', color: '#ff2d55', items: [
        ['Precios: 3 planes de suscripción', '', true],
        ['Calendario editorial de Instagram', '7 pilares, 2 semanas', true],
        ['Estrategia de influencers', 'De nano a celebrity', true],
        ['5 anuncios en 5 formatos', '', true],
      ],
    },
    {
      list: 'Portfolio', color: '#007aff', items: [
        ['Subir el portfolio', '', false, 'Esta semana', false],
        ['Capturas de Dead Silence', '', true],
        ['Pantallas de Planify', '', true],
      ],
    },
  ],
  en: [
    {
      list: 'C3PO', color: '#ff9500', items: [
        ['Present C3PO at the Community Meetup', 'Parque de la Innovación', false, 'Week of Nov 30', true],
        ['Rehearse the pitch with a timer', '10 minutes, 14 slides', false, 'Week of Nov 23', false],
        ['C3PO Expo', 'Pieces, booth and launch', false, 'March 2027', false],
        ['English version of the pitch', '', true],
        ['Simulated demo in case the robot is not there', '', true],
      ],
    },
    {
      list: 'Marketing', color: '#ff2d55', items: [
        ['Pricing: 3 subscription plans', '', true],
        ['Instagram content calendar', '7 pillars, 2 weeks', true],
        ['Influencer strategy', 'From nano to celebrity', true],
        ['5 ads in 5 formats', '', true],
      ],
    },
    {
      list: 'Portfolio', color: '#007aff', items: [
        ['Publish the portfolio', '', false, 'This week', false],
        ['Dead Silence screenshots', '', true],
        ['Planify screens', '', true],
      ],
    },
  ],
};

export const TRASH = {
  es: ['miedo_a_empezar.txt', 'perfeccionismo.psd', 'excusas.zip', 'version_final_FINAL_v7.fig'],
  en: ['fear_of_starting.txt', 'perfectionism.psd', 'excuses.zip', 'final_FINAL_v7.fig'],
};

// Moodboard: [archivo, nombre que se ve]
export const MOOD = [
  ['good-things', 'good_things.jpeg'], ['start', 'start.jpeg'], ['you-are-the-product', 'product.png'],
  ['nyc-halftone', 'nyc_halftone.jpeg'], ['only-limit', 'only_limit.jpeg'], ['remember', 'remember.png'],
  ['cranes', 'cranes_blue.jpeg'], ['blur-life', 'blur_life.jpeg'], ['jungle-tower', 'jungle_tower.jpeg'],
  ['red-tower', 'red_tower.jpeg'], ['street-lines', 'street_lines.jpeg'], ['cheers', 'cheers.jpeg'],
  ['cassette', 'cassette.jpeg'], ['grid-daily', 'grid_daily.jpeg'], ['face-lines', 'face_lines.jpeg'],
  ['glass-city', 'glass_city.jpeg'], ['gold-frame', 'gold_frame.jpeg'], ['gold-disc', 'gold_disc.jpeg'],
  ['gold-tiles', 'gold_tiles.jpeg'], ['gold-texture', 'gold_texture.jpeg'], ['copper-dots', 'copper_dots.jpeg'],
  ['liquid-copper', 'liquid_copper.jpeg'], ['marble-swirl', 'marble.jpeg'], ['painted-circles', 'painted_circles.jpeg'],
  ['candy', 'candy.jpeg'], ['table-faces', 'table.png'], ['city-cutout', 'city.png'],
  ['spray-can', 'spray.png'], ['star', 'star.png'], ['lasso-tool', 'lasso_tool.png'], ['glass-folder', 'folder.png'],
].map(([f, name]) => ({ src: MOODDIR + f + '.webp', name }));

export const TERMINAL = {
  es: {
    help: 'comandos: whoami · skills · proyectos · seguridad · contacto · ls · cat sobre_mi.txt · open <app> · date · clear',
    whoami: 'mia — diseñadora, 3D, contenido. Buenos Aires.',
    skills: 'figma  photoshop  illustrator  after-effects  capcut  blender  unity  html/css/js  linux',
    proyectos: 'C3PO/  coopid/  planify/  dead_silence/  kate_moss/   →  probá: open proyectos',
    seguridad: 'Me interesa la ciberseguridad. Estoy aprendiendo lo básico: la terminal de Linux, cómo funcionan las redes y cómo cuidar cuentas y datos (contraseñas, 2FA, phishing).',
    contacto: 'mail: miagonzalb@gmail.com  ·  instagram: @miagonzalb  ·  probá: open mail',
    ls: 'proyectos/  habilidades/  sobre_mi.txt  pitch_c3po.pdf',
    cat: 'Estudio 5to TIC en ORT. Diseño, modelo en 3D, edito video, organizo y presento.',
    sudo: 'buen intento ♡',
    notFound: 'comando no encontrado:',
    opening: 'abriendo',
  },
  en: {
    help: 'commands: whoami · skills · projects · security · contact · ls · cat about_me.txt · open <app> · date · clear',
    whoami: 'mia — designer, 3D, content. Buenos Aires.',
    skills: 'figma  photoshop  illustrator  after-effects  capcut  blender  unity  html/css/js  linux',
    proyectos: 'C3PO/  coopid/  planify/  dead_silence/  kate_moss/   →  try: open projects',
    seguridad: "I'm into cybersecurity. I'm learning the basics: the Linux terminal, how networks work and how to protect accounts and data (passwords, 2FA, phishing).",
    contacto: 'email: miagonzalb@gmail.com  ·  instagram: @miagonzalb  ·  try: open mail',
    ls: 'projects/  skills/  about_me.txt  pitch_c3po.pdf',
    cat: 'Senior at ORT (IT). I design, model in 3D, edit video, organize and present.',
    sudo: 'nice try ♡',
    notFound: 'command not found:',
    opening: 'opening',
  },
};
