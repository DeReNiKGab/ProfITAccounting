import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contacts() {
    const [formData, setFormData] = useState({
        name: '',
        from_email: '',
        from_phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_wxr0rsw', 'template_uvksf6z', formData, '8A7LM7bv5m1eAP8MA')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message sent successfully');
            }, (error) => {
                console.log('FAILED...', error);
                alert('Failed to send message');
            });

        // Reset form
        setFormData({
            name: '',
            from_email: '',
            from_phone: '',
            message: '',
        });
    };

    return (
        <div id="sb-page-structure">
            <section id="contact-info-and-form-with-map" className="sb-section sb-section-opt-light option-section-background-image-fixed appointment-inline-view option-section-background-contrast-none option-align-left half-width-contact-form option-hide-hours" data-sb-id="5484519d-90ba-4512-95c4-806ee6d5b2a6">
                <div className="topDivide container sb-container-fixed sb-container">
                    <div id="sb-id-795a5b84-1046-4f1b-825b-5a05302e0d33" className="row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center">
                        <div id="sb-id-7cb8314a-e923-41e9-a138-04e09992a7db" className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-xl-offset-0 sb-component-contact-full">
                            <div id="sb-id-b80c641b-1ded-48d5-9eb3-659851d402d6" className="sb-column-content">
                                <div className="contact-full">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-5">
                                            <div className="contact-full__form" id="contact-form-b80c641b-1ded-48d5-9eb3-659851d402d6">
                                                <div className="sb-section-title sb-section-alignable" data-component-field="title" data-sb-field="text">Contact us</div>
                                                <div className="sb-section-subtitle sb-section-alignable" data-component-field="subtitle" data-sb-field="text">If you have any questions or want to learn more, please send us an email.</div>
                                                <p>We want to hear from you! Whether you want to hire us to handle all of your accounting needs or have questions, please get in touch with us!</p>
                                                <form className="form js-form" data-recaptcha-version="1" id="UL_FORM_c37bbeab-1829-44ea-b174-a147d8cc6095" onSubmit={handleSubmit}>
                                                    <div className="form__group  form__group--required ">
                                                        <label htmlFor="unique_id_2-b80c641b-1ded-48d5-9eb3-659851d402d6" className="form__label contact-form__label">Name <span className="form__label-required">*</span></label>
                                                        <input required type="text" className="form__input contact-form__input" id="unique_id_2-b80c641b-1ded-48d5-9eb3-659851d402d6" name="name" placeholder="Jane Smith" value={formData.name} onChange={handleChange} />
                                                    </div>
                                                    <div className="form__group  form__group--required ">
                                                        <label htmlFor="unique_id_1-b80c641b-1ded-48d5-9eb3-659851d402d6" className="form__label contact-form__label">Email address <span className="form__label-required">*</span></label>
                                                        <input required type="email" className="form__input contact-form__input" id="unique_id_1-b80c641b-1ded-48d5-9eb3-659851d402d6" name="from_email" placeholder="email@website.com" value={formData.from_email} onChange={handleChange} />
                                                    </div>
                                                    <div className="form__group  form__group--required ">
                                                        <label htmlFor="unique_id_3-b80c641b-1ded-48d5-9eb3-659851d402d6" className="form__label contact-form__label">Phone number <span className="form__label-required">*</span></label>
                                                        <input required type="tel" className="form__input contact-form__input" id="unique_id_3-b80c641b-1ded-48d5-9eb3-659851d402d6" name="from_phone" placeholder="555-555-5555" value={formData.from_phone} onChange={handleChange} />
                                                    </div>
                                                    <div className="form__group">
                                                        <label htmlFor="unique_id_4-b80c641b-1ded-48d5-9eb3-659851d402d6" className="form__label contact-form__label">Message</label>
                                                        <textarea className="form__input form__input--textarea contact-form__textarea" id="unique_id_4-b80c641b-1ded-48d5-9eb3-659851d402d6" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                                                    </div>
                                                    <div className="form__group form__group--checkbox form__group--required">
                                                        <div className="form__checkbox-error" id="checkbox-error-message-gdpr_consent-b80c641b-1ded-48d5-9eb3-659851d402d6">
                                                            Please select at least one option.
                                                        </div>
                                                        <div className="form__input-checkbox-wrapper">
                                                            <input required type="checkbox" className="form__input form__input--checkbox" id="3e040677-855d-47d0-a6c5-972b2d518a3d-b80c641b-1ded-48d5-9eb3-659851d402d6" name="gdpr_consent" value="Checked" />
                                                            <label htmlFor="3e040677-855d-47d0-a6c5-972b2d518a3d-b80c641b-1ded-48d5-9eb3-659851d402d6" className="form__label contact-form__label">
                                                                I allow this website to store my submission so they can respond to my inquiry. <span className="form__label-required">*</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="sb-button sb-button--form contact-form__btn">Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-6">
                                            <div className="contact-full__location">
                                                <div className="contact-details vcard sb-section-alignable">
                                                    <div className="contact-details__row contact-details__contact">
                                                        <div className="h3 contact-details__title">Contact us</div>
                                                        <div className="contact-details__phone">
                                                            <a aria-label="Call us at +37493666889" className="tel"
                                                               href="tel:+37493666889">+37493666889</a>
                                                        </div>
                                                        <div className="contact-details__email">
                                                            <a aria-label="Email us at aprofit020@gmail.com"
                                                               className="email"
                                                               href="mailto:aprofit020@gmail.com">aprofit020@gmail.com</a>
                                                        </div>
                                                        <ul className="social-icons contact-details__social">
                                                            <li><a aria-label="Facebook" className="sb-icon"
                                                                   href="https://www.facebook.com/photo/?fbid=283902644482131&set=p.283902644482131"
                                                                   rel="noreferrer" target="_blank"><i
                                                                aria-hidden="true" className="fa fa-facebook"></i></a>
                                                            </li>
                                                            <li><a aria-label="Instagram" className="sb-icon"
                                                                   href="https://www.instagram.com" rel="noreferrer"
                                                                   target="_blank"><i aria-hidden="true"
                                                                                      className="fa fa-instagram"></i></a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="contact-details__row contact-details__location">
                                                        <div className="h3 contact-details__title">Location</div>
                                                        <p className="adr contact-details__address">
                                                            <a aria-label="Our location at Metsamor, Armavir 0910 AM"
                                                               href="https://www.google.com/maps/place/+Metsamor+Armavir+0910+AM"
                                                               rel="noreferrer" target="_blank">
                                                                Metsamor, Armavir 0910 AM
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <div className="google-map">
                                                        <iframe
                                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.9685291755065!2d44.11595913889656!3d40.14368574323366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aefbf17b70ced%3A0xd1410d39de712361!2zQXJtYXZpciDVgNWh1bfVvtWh1brVodWw1aHVr9Wh1bYg1aPWgNWh1b3VpdW21bXVodWv!5e0!3m2!1sen!2sam!4v1718458448130!5m2!1sen!2sam"
                                                            width="600"
                                                            height="450"
                                                            allowFullScreen=""
                                                            loading="lazy"
                                                            referrerPolicy="no-referrer-when-downgrade"
                                                            title="google-maps"
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contacts;