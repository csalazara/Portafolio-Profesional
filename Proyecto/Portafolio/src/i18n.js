import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      navAbout: "Sobre mi",
      navExperience: "Experiencia",
      navSkills: "Habilidades",
      navProjects: "Proyectos",
      navContact: "Contacto",
      navLanguaje: "Idioma",
  
      profileHello: "Hola",
      profileIm: "Soy",
      profileDescription: "Desarrollador full stack con una sólida experiencia en la creación y mantenimiento de aplicaciones web y soluciones de software. Mi experiencia abarca desde el desarrollo de interfaces intuitivas hasta la implementación de lógicas de negocio complejas. Me especializo en optimizar sistemas y procesos para mejorar la eficiencia y la satisfacción del cliente, con un enfoque en la resolución de problemas y la mejora continua.",
  
      btnDownloadResume: "Descargar CV",
  
      experienceTittle: "Experiencia Laboral",
      experienceDescription: "Esta sección describe los lugares de empleo, la duración de mi tiempo en cada uno y una breve descripción de los roles desempeñados en cada puesto.",
  
      experienceTitle1: "Analista Desarrollador de Software - Grupo Prides",
      experienceDate1: "Febrero 2024 - Actualidad",
      experienceDescription1: "Responsable de gestionar una serie de proyectos web integrados, desarrollar nuevas funcionalidades y proporcionar mantenimiento y soporte continuo para estos sistemas. Mi rol incluye asegurar el rendimiento óptimo de cada proyecto, entregar soluciones efectivas y garantizar una experiencia de usuario de alta calidad.",
  
      experienceTitle2: "Desarrollador de Software Junior - Grupo Diverscan S.A.",
      experienceDate2: "Febrero 2023 - Febrero 2024",
      experienceDescription2: "Como desarrollador de software junior, me enfoco en el desarrollo de sitios web para la gestión de activos. Colaboro estrechamente con equipos multifuncionales para diseñar, construir y mantener sitios web que mejoren la experiencia del usuario y optimicen los procesos de gestión de activos, todo mientras cumplo con los estándares de calidad y los requisitos de nuestros clientes.",
  
      experienceTitle3: "Desarrollador Full Stack Freelance - Intel",
      experienceDate3: "Septiembre 2022 - Octubre 2022",
      experienceDescription3: "Como desarrollador, trabajé en la implementación del front-end de una aplicación interna de negocio utilizada para operaciones CRUD de usuarios y productos utilizando ReactJS, incluyendo la integración con la lógica de back-end existente en .NET que se conectaba con la capa de persistencia. Esto se realizó siguiendo el diseño del líder técnico del equipo.",
  
      skillsTitle: "Habilidades Tecnicas",
      skillsDescription: "Esta sección describe las habilidades y competencias adquiridas a lo largo de mi carrera, destacando las áreas clave de experiencia y conocimiento en las que me he especializado.",
  
      projectsTitle: "Proyectos",
      projectsDescription: "Esta sección presenta los proyectos en los que he trabajado, con una breve descripción de su naturaleza y objetivos.",
  
      projectTitle1: "DevOps Cars",
      projectDescription1: "Una página web para publicar carros, donde los usuarios pueden crear anuncios, agregar detalles como modelo, año y precio, y gestionar sus publicaciones fácilmente.",
      projectTitle2: "Dungeon Master",
      projectDescription2: "Un juego de Dungeon Master donde los jugadores asumen el papel de aventureros que exploran mazmorras llenas de desafíos y criaturas. El juego incluye mecánicas de rol, combate táctico y creación de mapas.",
      projectTitle3: "Code&Go",
      projectDescription3: "Una landing page diseñada para mostrar una empresa y su equipo, destacando la experiencia, roles y espíritu colaborativo que impulsan el negocio. La página proporciona una visión general de la misión y los valores de la empresa, mientras resalta las habilidades y experiencias de cada miembro del equipo.",
      projectTitle4: "StreamingGo",
      projectDescription4: "Una plataforma de streaming donde los usuarios pueden crear salas para ver películas en conjunto con amigos en tiempo real. La plataforma ofrece una experiencia de visualización sincronizada, permitiendo que todos disfruten de la misma película al mismo tiempo.",
  
      contactTittle: "Contacto",
      contactDescription: "Esta sección proporciona la información necesaria para ponerse en contacto conmigo, incluyendo opciones para enviar un mensaje directo o conectar a través de otras plataformas profesionales.",
  
      contactSubTittle : 'No dudes en contactarme',
      contactName: "Nombre",
      contactEmail: "Correo electrónico",
      contactMessage: "Mensaje",
      btnEnviar: "Enviar",

      successTitle: "¡Enviado!",
      successMessage: "Tu mensaje ha sido enviado correctamente.",
      errorTitle: "Error",
      errorMessageSend: "Hubo un problema al enviar tu mensaje. Inténtalo nuevamente.",
      errorName: "El nombre es obligatorio.",
      errorEmailRequired: "El correo electrónico es obligatorio.",
      errorEmailInvalid: "El formato del correo no es válido.",
      errorMessage: "El mensaje es obligatorio.",
      btnOk:"Aceptar"
    }
  }
  ,
  en: {
    translation: {
      navAbout:"About",
      navExperience:"Experience",
      navSkills:"Skills",
      navProjects:"Projects",
      navContact:"Contact",
      navLanguaje:"Languaje",

      profileHello: "Hello",
      profileIm : "I'm",
      profileDescription: "Full stack developer with a strong background in creating and maintaining web applications and software solutions. My experience ranges from developing intuitive interfaces to implementing complex business logic. I specialize in optimizing systems and processes to improve efficiency and customer satisfaction, with a focus on problem-solving and continuous improvement.",

      btnDownloadResume:"download resume",

      experienceTittle:"Work Experience",
      experienceDescription:"This section outlines the places of employment, the duration of my tenure at each, and a brief description of the roles held in each position.",

      experienceTitle1:"Software Developer Analyst - Grupo Prides",
      experienceDate1:"February 2024 - Present",
      experienceDescription1:"Responsible for managing a series of integrated web projects, developing new functionalities, and providing ongoing maintenance and support for these systems. My role includes ensuring the optimal performance of each project, delivering effective solutions, and guaranteeing a high-quality user experience.",

      experienceTitle2:"Junior Software Developer - Grupo Diverscan S.A.",
      experienceDate2:"February 2023 - February 2024",
      experienceDescription2:"As a junior software developer, I focus on developing websites for asset management. I collaborate closely with cross-functional teams to design, build, and maintain websites that enhance user experiences and streamline asset management processes, all while adhering to quality standards and meeting our clients' requirements.",

      experienceTitle3:"Full Stack Developer Freelance - Intel",
      experienceDate3:"September 2022 - October 2022",
      experienceDescription3:"As a developer, worked on implementing the front-end of an internal business application used for CRUD operations on users and products using ReactJS, including the integration with the existing .NET back-end logic that connected with the persistence layer. This was done following the design of the team's tech lead.",

      skillsTitle:"Skills",
      skillsDescription:"This section outlines the skills and competencies acquired throughout my career, highlighting the key areas of expertise and knowledge in which I have specialized.",

      projectsTitle:"Projects",
      projectsDescription:"This section presents the projects I have been involved in, with a brief description of their nature and objectives.",

      projectTitle1:"DevOps Cars",
      projectDescription1:"A website for publishing cars, where users can create ads, add details such as model, year, and price, and manage their listings easily.",
      projectTitle2:"Dungeon Master",
      projectDescription2:"A Dungeon Master game where players take on the role of adventurers exploring dungeons filled with challenges and creatures. The game includes role-playing mechanics, tactical combat, and map creation.",
      projectTitle3:"Code&Go",
      projectDescription3:"A landing page designed to showcase a company and its team, highlighting the experience, roles, and collaborative spirit that drive the business forward. The page provides an overview of the company's mission and values, while emphasizing the skills and experiences of each team member.",
      projectTitle4:"StreamingGo",
      projectDescription4:"A streaming platform where users can create rooms to watch movies together with friends in real-time. The platform offers a synchronized viewing experience, allowing everyone to enjoy the same movie at the same time.",

      contactTittle: 'Contact',
      contactDescription: 'This section provides the necessary information to get in touch with me, including options to send a direct message or connect through other professional platforms.',

      contactSubTittle : 'Feel free to contact me',
      contactName:'Name',
      contactEmail:'Email',
      contactMessage:'Message',
      btnEnviar: 'Send',

      successTitle: "Sent!",
      successMessage: "Your message has been sent successfully.",
      errorTitle: "Error",
      errorMessageSend: "There was a problem sending your message. Please try again.",
      errorName: "Name is required.",
      errorEmailRequired: "Email is required.",
      errorEmailInvalid: "The email format is invalid.",
      errorMessage: "Message is required.",
      btnOk: "Ok"

    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // idioma inicial
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React ya escapa los valores
  },
});

export default i18n;
