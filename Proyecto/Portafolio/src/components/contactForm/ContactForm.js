import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import './ContactForm.css';
import '../profileCard/ProfileCard.css';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = t('errorName');
        if (!formData.email.trim()) {
            errors.email = t('errorEmailRequired');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = t('errorEmailInvalid');
        }
        if (!formData.message.trim()) errors.message = t('errorMessage');
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            emailjs
                .send(
                    'service_a953jxr', // Reemplaza con tu Service ID de EmailJS
                    'template_u0811cn', // Reemplaza con tu Template ID de EmailJS
                    formData,
                    'fC2x6WfIM7fzzrsJD' // Reemplaza con tu Public Key de EmailJS
                )
                .then(
                    () => {
                        Swal.fire({
                            title: t('successTitle'),
                            text: t('successMessage'),
                            icon: 'success',
                            customClass: {
                                confirmButton: "button-transform btnSeetAlert",
                            },
                            confirmButtonText: t('btnOk')
                        });
                        setFormData({ name: '', email: '', message: '' });
                    },
                    () => {
                        Swal.fire({
                            title: t('errorTitle'),
                            text: t('errorMessageSend'),
                            icon: 'error',
                            customClass: {
                                confirmButton: "button-transform btnSeetAlert",
                            },
                            confirmButtonText: t('btnOk')
                        });
                    }
                );
        }
    };

    return (
        <div className="contact-form-container my-5">
            <h2 className="text-center mb-4">{t('contactTittle')}</h2>
            <h6 className="text-center mb-4">{t('contactDescription')}</h6>
            <Row className="contact-form d-flex justify-content-center">
                <Col xs={12} sm={7} md={5} style={{maxWidth:'650px'}} className="contact-form-left shadow mx-3">
                    <h2>{t('contactSubTittle')}</h2>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formName" className="contact-form-input">
                            <Form.Label>{t('contactName')}</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                isInvalid={!!formErrors.name}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="contact-form-input">
                            <Form.Label>{t('contactEmail')}</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                isInvalid={!!formErrors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="contact-form-input">
                            <Form.Label>{t('contactMessage')}</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                isInvalid={!!formErrors.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formErrors.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <button
                            type="submit"
                            className="button-transform text-color-black"
                            style={{ textTransform: 'uppercase' }}
                        >
                            {t('btnEnviar')}
                        </button>
                    </Form>
                </Col>
            </Row>
            <Row className="social-media-footer">
                <Col xs={12} sm={7} md={5} style={{maxWidth:'650px'}} className="background-primary shadow mx-3">
                    <Row className="background-primary social-media-footer">
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
                </Col>
            </Row>
        </div>
    );
};

export default ContactForm;
