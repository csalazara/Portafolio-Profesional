import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './Projects.css';

function Projects() {

  const { t } = useTranslation();

  const projects = [
    {
      img: 'projects/cars.gif',
      title: t('projectTitle1'),
      description: t('projectDescription1'),
      url:'https://github.com/cristopher9730?tab=repositories'
    },
    {
      img: 'projects/dungeon.gif',
      title: t('projectTitle2'),
      description: t('projectDescription2'),
      url:'https://github.com/cristopher9730/Dungeon-Master'
    },
    {
      img: 'projects/CodeGo.gif',
      title: t('projectTitle3'),
      description: t('projectDescription3'),
      url:'https://github.com/cristopher9730/Code-GO'
    },
    // {
    //   img: 'projects/dungeon.gif',
    //   title: t('projectTitle4'),
    //   description: t('projectDescription4'),
    //   url:'https://github.com/cristopher9730?tab=repositories'
    // },
  ];

  return (
    <Container fluid className="my-5">
      <h2 className="text-center mb-4">{t('projectsTitle')}</h2>
      <h6 className="text-center mb-4">{t('projectsDescription')}</h6>
      <Row className="gy-4 justify-content-center">
        {projects.map((project, index) => (
          <Card className="mx-3 shadow" key={index} style={{ width: '30rem' }}>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/${project.img}`} className="mt-1" />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text className='container-text-project'>
                {project.description}
              </Card.Text>
              <div className="d-flex justify-content-end">
                <a href={project.url} target="_blank" className="button-transform text-color-black">
                  <FaGithub className="social-icon" />
                </a>
              </div>
            </Card.Body>
          </Card>

        ))}
      </Row>

    </Container>
  );
}

export default Projects;
