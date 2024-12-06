import React, { useState, useEffect, useRef } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import ProfileCard from './components/profileCard/ProfileCard';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import TechCarousel from './components/techCarousel/TechCarousel'
import ContactForm  from './components/contactForm/ContactForm'
import { FaArrowUp } from 'react-icons/fa';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0); // Estado para almacenar la altura del Navbar
  const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Estado para saber si el navbar está abierto
  const navbarRef = useRef(null); // Referencia al Navbar

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Verifica si hay una preferencia guardada en el localStorage
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };


  useEffect(() => {
    // Guarda la preferencia de tema en localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    // Cambia la clase del body para activar los estilos del modo oscuro o claro
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  // Detecta el evento de scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Obtiene la altura del Navbar dinámicamente
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight); // Asigna la altura del Navbar
      }
    };

    // Añade el listener de scroll
    window.addEventListener('scroll', handleScroll);

    // Actualiza la altura del Navbar al cargar el componente
    updateNavbarHeight();

    // Escucha cambios de tamaño de la ventana para ajustar la altura si es necesario
    window.addEventListener('resize', updateNavbarHeight);

    // Elimina los listeners cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  // Cambiar el estado cuando el Navbar se despliega o se cierra
  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  // Lógica para el color de fondo del navbar
  const backgroundColor = isNavbarOpen || scrolled
    ? (isDarkMode ? '#121212' : 'white') // Fondo oscuro en modo oscuro y blanco en modo claro
    : (isDarkMode ? 'transparent' : 'transparent'); // Fondo transparente en ambos modos si no está abierto o scrolleado

  const colorTextOptionNav = scrolled
    ? (isDarkMode ? 'text-white' : 'text-dark') // Fondo oscuro en modo oscuro y blanco en modo claro
    : (isDarkMode ? 'text-white' : 'text-white'); // Fondo transparente en ambos modos si no está abierto o scrolleado

  //Cambio de idioma
  const { t, i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState('en'); // Estado para el idioma actual

  // Función para cambiar el idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  //Descarga pdf
  const handleDownload = () => {
    const pdfFiles = {
      en: 'resume/CV-CristopherSalazarArguedas-EN.pdf', // Ruta del archivo PDF en inglés
      es: 'resume/CV-CristopherSalazarArguedas-ES.pdf', // Ruta del archivo PDF en español
    };
  
    // Determina el archivo según el idioma activo
    const selectedPdf = pdfFiles[activeLang] || pdfFiles['en']; // Predeterminado al inglés si el idioma no está en el mapa
  
    // Crea un enlace temporal para descargar el archivo
    const link = document.createElement('a');
    link.href = selectedPdf;
    link.download = selectedPdf.split('/').pop(); // Extrae el nombre del archivo del path
    link.click();
  };
  
  //scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 100; // Ajustar 50px hacia arriba
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  //Scroll top
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container fluid className='p-0'>
      <div id='about'>
        {/* Navbar */}
        <Navbar
          ref={navbarRef} // Referencia al Navbar
          //bg={backgroundColor} // Cambia el fondo cuando el navbar está abierto o hace scroll
          variant="light"
          expand="lg"
          fixed="top" // Asegura que el navbar se quede fijo en la parte superior
          style={{
            transition: 'background-color 0.3s ease',
            backgroundColor: backgroundColor// Transición para el cambio de color
          }}
        >
          <Container fluid className='mx-3'>
            <Navbar.Brand href="#home">
              <img
                src={isDarkMode && scrolled? `${process.env.PUBLIC_URL}/logo-light.png` : `${process.env.PUBLIC_URL}/Logo.png`}
                alt="Logo"
                style={{ height: '50px' }}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={handleNavbarToggle} // Cambia el estado cuando se hace clic
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={() => scrollToSection('about')} className={`${colorTextOptionNav} nav-link`} >{t('navAbout')}</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('experience')} className={`${colorTextOptionNav} nav-link`} >{t('navExperience')}</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('skills')} className={`${colorTextOptionNav} nav-link`} >{t('navSkills')}</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('projects')} className={`${colorTextOptionNav} nav-link`} >{t('navProjects')}</Nav.Link>
                <Nav.Link onClick={() => scrollToSection('contact')} className={`${colorTextOptionNav} nav-link`} >{t('navContact')}</Nav.Link>
                <div className="menu">
                  <div className="item">
                    <a href='#' className="link">
                      <span className={colorTextOptionNav}> {t('navLanguaje')} </span>
                      <svg viewBox="0 0 360 360" >
                        <g id="SVGRepo_iconCarrier">
                          <path
                            id="XMLID_225_"
                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <div className="submenu">
                      <div className="submenu-item">
                        <a
                          
                          className="submenu-link"
                          onClick={() => changeLanguage('es')}
                        > Español
                        </a>
                      </div>
                      <div className="submenu-item">
                        <a
                          
                          className="submenu-link"
                          onClick={() => changeLanguage('en')}
                        >
                          English
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Imagen de fondo extendida debajo del Navbar */}
        <div className="img-nav-container"></div>
      </div>

      <div className='mx-3'>
        <Container
          fluid
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            marginTop: `${navbarHeight}px`, // Mantiene el margen para que no se superponga al navbar
          }}
        >
          <div className='profileCard'>
            <div>
              <ProfileCard darkMode={isDarkMode}/>
            </div>
          </div>

          <div>
            <button className="button-transform text-color-black" onClick={handleDownload} style={{ textTransform: 'uppercase' }}>{t('btnDownloadResume')}</button>
          </div>
        </Container>
          <div id='experience'><Experience></Experience></div>
        
        <div id='skills'><TechCarousel></TechCarousel></div>
        
        <div id='projects'><Projects></Projects></div>
        
        <div id='contact'><ContactForm></ContactForm></div>
        
      </div>

      {/* Botón de Scroll Top */}
      {scrolled && (
        <div className="container-ScrollTop">
          <button className="scrollTopBtn text-color-black" onClick={handleScrollTop}>
            <FaArrowUp size={30} />
          </button>
        </div>
      )}

      {/* Boton modo oscuro */}
      <div className="container-Dark-Mode">
        <label className="toggle-Dark-Mode" htmlFor="switch-Dark-Mode">
          <input
            id="switch-Dark-Mode"
            className="input-Dark-Mode"
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
          />
          <div className="icon-Dark-Mode icon--moon">
            <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fillRule="evenodd"></path>
            </svg>
          </div>
          <div className="icon-Dark-Mode icon--sun">
            <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
            </svg>
          </div>
        </label>
      </div>



    </Container>
  );
}

export default App;
