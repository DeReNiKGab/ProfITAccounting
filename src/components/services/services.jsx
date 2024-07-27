import React, {  useRef } from 'react';
import {Link} from "react-router-dom";

const servicesList = [
  {
    id: 'tax-preparation',
    title: 'Tax preparation',
    description: 'Expert tax preparation services for individuals and businesses.',
    imageUrl: 'https://cdn.b12.io/media/04cf46b8-3cac-11e8-9f2d-0242ac11000f-jpg-regular_image.jpeg',
    link: 'tax-preparation.html'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping',
    description: 'Efficient bookkeeping solutions for businesses of all sizes.',
    imageUrl: 'https://cdn.b12.io/media/690deae8-3cad-11e8-8656-0242ac11000f-jpeg-regular_image.jpeg',
    link: 'bookkeeping.html'
  },
  {
    id: 'payroll-management',
    title: 'Payroll management',
    description: 'Streamlined payroll management for smooth business operations.',
    imageUrl: 'https://cdn.b12.io/media/cd4aec26-3cb3-11e8-bbb9-0242ac11000f-jpg-regular_image.jpeg',
    link: 'payroll-management.html'
  },
  {
    id: 'financial-consulting',
    title: 'Financial consulting',
    description: 'Strategic financial consulting for informed decision-making.',
    imageUrl: 'https://cdn.b12.io/media/ab008324-3cc2-11e8-9f69-0242ac11000f-jpg-regular_image.jpeg',
    link: 'financial-consulting.html'
  },
  {
    id: 'tax-planning',
    title: 'Tax planning',
    description: 'Strategic tax planning to minimize tax liabilities.',
    imageUrl: 'https://cdn.b12.io/media/f9269b1a-3562-11eb-90ba-0242ac110002-jpg-regular_image.jpeg',
    link: 'tax-planning.html'
  },
  {
    id: 'financial-reporting',
    title: 'Financial reporting',
    description: 'Comprehensive financial reporting for transparent insights.',
    imageUrl: 'https://cdn.b12.io/media/6dd95b24-3cb3-11e8-bbb9-0242ac11000f-jpeg-regular_image.jpeg',
    link: 'financial-reporting.html'
  },
  {
    id: 'business-valuation',
    title: 'Business valuation',
    description: 'Detailed assessments to determine the true value of your business.',
    imageUrl: 'https://cdn.b12.io/media/f40d3510-3cab-11e8-9f2d-0242ac11000f-jpg-regular_image.jpeg',
    link: 'business-valuation.html'
  },
  {
    id: 'financial-audits-and-reviews',
    title: 'Financial audits and reviews',
    description: 'Detailed checks to ensure the accuracy of your financial statements.',
    imageUrl: 'https://cdn.b12.io/media/f5cf3ee4-3cc3-11e8-9f69-0242ac11000f-com-regular_image.jpeg',
    link: 'financial-audits-and-reviews.html'
  }
];


const ServicesSection = () => {
  return (

      <div   id="sb-page-structure">
      <section  className="sb-section sb-section-opt-light option-imagecrop-square option-items-grid-content-overlay option-align-left option-align-content-center option-columns-3col option-width-12col option-button-none option-section-background-image-fixed option-imagesize-lg" id="services">
        <div className="container sb-container-fixed sb-container">
          <div className="row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center">
            <div className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="sb-column-content">
                <div className="sb-list-with-filters sb-section-alignable">
                  <div className="sb-list-with-filters__content">
                    <h2 className="sb-section-title sb-section-alignable option-width"
                        data-aos="slide-up" data-aos-delay="0" data-aos-duration="400"
                        data-aos-easing="ease-in-out" data-aos-offset="120" data-aos-once="true"
                        data-component-field="title" data-sb-field="text" data-sb-is-link=""
                        data-sb-type="text" data-sb-uuid="ae8048ba-425d-4c1b-910c-1d087ee26993">
                      Expert accounting
                    </h2>
                    <p className="sb-section-subtitle sb-section-alignable option-width"
                       data-aos="slide-up"  data-aos-delay="50"  data-aos-duration="400"
                       data-aos-easing="ease-in-out"  data-aos-offset="120"  data-aos-once="true"
                       data-component-field="subtitle" data-sb-field="text" data-sb-is-link=""
                       data-sb-type="text" data-sb-uuid="762d745a-fe0a-41da-b340-cd8b8070b702">
                      Professional accounting services for businesses and individuals.
                    </p>
                    <p className="sb-paragraph">
                      Our team of experienced accountants provides comprehensive accounting solutions to help you manage your finances with confidence. From bookkeeping to tax preparation, we've got you covered.
                    </p>
                  </div>
                  <div className="sb-list-with-filters__list">
                    <ul className="items-grid sb-list">
                      {servicesList.map(service => (
                          <li key={service.id} className="items-grid__item items-grid__item--bg- tag-all">
                            <div className="items-grid__item-body">
                              <a href={service.link} className="sb-animate-image" aria-label="Read more">
                                <figure className="option-image grid-with-lightbox__item lazy" style={{ backgroundImage: `url('${service.imageUrl}')` }}>
                                  <img alt={service.title} src={service.imageUrl} loading="lazy" />
                                </figure>
                              </a>
                              <div className="items-grid__item-content">
                                <h3 className="items-grid__header">{service.title}</h3>
                                <p className="items-grid__note">{service.description}</p>
                                <Link to={`/Service-Items?imageUrl=${encodeURIComponent(service.imageUrl)}&title=${encodeURIComponent(service.title)}&description=${encodeURIComponent(service.description)}`}className="items-grid__link">Read more</Link>
                              </div>
                            </div>
                          </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

  );
};

export default ServicesSection;
