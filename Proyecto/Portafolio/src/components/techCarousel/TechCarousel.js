import React from "react";
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "./TechCarousel.css"; // Archivo CSS para estilos

const TechCarousel = () => {
    const { t } = useTranslation();

  const images = [
      "skills/angular.png",
      "skills/Bootstrap.png",
      "skills/cc.png",
      "skills/css.png",
      "skills/git.png",
      "skills/html5.png",
      "skills/java.png",
      "skills/javascript.png",
      "skills/jquery.png",
      "skills/net.png",
      "skills/react.png",
      "skills/spring-boot.png",
      "skills/sql.png",
      "skills/typescript.png",
  ];

    return (
        <Container fluid className="my-5">
            <h2 className="text-center mb-4">{t('skillsTitle')}</h2>
            <h6 className="text-center mb-4">{t('skillsDescription')}</h6>
            <div className="slider">
                <div className="slide-track">
                    {images.concat(images).map((src, index) => (
                        <div className="slide" key={index}>
                            <img src={`${process.env.PUBLIC_URL}/${src}`} alt={`Logo ${index + 1}`} />                          
                        </div>
                    ))}
                </div>
            </div>
        </Container>

    );
};

export default TechCarousel;
