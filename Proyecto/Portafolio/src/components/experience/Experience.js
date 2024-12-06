import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Experience.css';
import { TbWorld } from "react-icons/tb";
import { useTranslation } from 'react-i18next';

function Experience() {

  const { t } = useTranslation();

    const experiences = [
        {
          yearRange: t('experienceDate1'),
          icon: <TbWorld  />,
          title: t('experienceTitle1'),
          description: t('experienceDescription1'),
        },
        {
          yearRange: t('experienceDate2'),
          icon: <TbWorld  />,
          title: t('experienceTitle2'),
          description: t('experienceDescription2'),
        },
        {
          yearRange: t('experienceDate3'),
          icon: <TbWorld  />,
          title: t('experienceTitle3'),
          description: t('experienceDescription3'),
        },
      ];

  return (
    <Container fluid className="my-5">
      <h2 className="text-center mb-4">{t('experienceTittle')}</h2>
      <h6 className="text-center mb-4">{t('experienceDescription')}</h6>
      <Row className="gy-4 justify-content-center">
        {experiences.map((experience, index) => (
          <Col md={6} key={index}>
            <Card className="h-100 shadow border-0">
              <Card.Body>
                <h5 className="color-primary">{experience.title}</h5>
                <div className="d-flex align-items-center my-3">
                  <div className="icon-container text-color-secondary">{experience.icon}</div>
                  <h6 className="ms-3 mb-0 fw-bold">{experience.yearRange}</h6>
                </div>
                <Card.Text>{experience.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Experience;
