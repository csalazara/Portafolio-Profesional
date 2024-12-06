import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub,FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import './ProfileCard.css';

function ProfileCard({ darkMode }) {

  const { t } = useTranslation();

  return (
    <Container className="my-5 shadow">
      <Row className='background-white'>
        <Col lg={5} md={5} xs={12} className="d-flex justify-content-center align-items-center">
          <img
            src={darkMode ? `${process.env.PUBLIC_URL}/logo-light.png` : `${process.env.PUBLIC_URL}/Logo.png`}
            alt="Logo"
            style={{ width: '80%' }}
          />
        </Col>
        <Col lg={7} md={7} xs={12} className="d-flex flex-column justify-content-top">
          <Row>
            <span className='message mb-2'>{t('profileHello')}</span>
          </Row>
          <Row>
            <h1>
              <span style={{ fontWeight: 'normal' }}>{t('profileIm')} </span>Cristopher Salazar
            </h1>
          </Row>
          <Row>
            <p style={{ textAlign: 'justify', fontSize: '18px' }}>{t('profileDescription')}</p>
          </Row>
        </Col>
      </Row>
      <Row className='background-primary social-media-footer'>
        <a href='https://www.linkedin.com/in/cristophersalazar/' target="_blank" className='container-social-icon'>
          <FaLinkedinIn className='text-white social-icon' />
        </a>
        <a href='https://github.com/cristopher9730' target="_blank" className='container-social-icon'>
          <FaGithub className='text-white social-icon' />
        </a>
        <a href='https://wa.me/+50687031517' target="_blank" className='container-social-icon'>
          <FaWhatsapp className='text-white social-icon' />
        </a>
      </Row>
    </Container>
  );
}

export default ProfileCard;
