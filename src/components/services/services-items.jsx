import React, { useEffect } from 'react';
import {Link, useNavigate, useSearchParams} from 'react-router-dom';
import '../../style/css/Bootstrap/bootstrap.min.css';
import '../../style/css/font-awesome/css/font-awesome.min.css';
import '../../style/css/style.css';
import 'aos/dist/aos.css';
import Header from "../header/header";
import Footer from "../Footer/Footer";

const ServicesSectionItems = (props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const imageUrl = searchParams.get('imageUrl');
  const title = searchParams.get('title');
  const description = searchParams.get('description');

console.log(title )
  useEffect(() => {
    const targetToScrollTo = null;
    let textToScrollTo = null;
    const hasTextToSelectInUrl = window.performance.getEntriesByType("navigation")[0].name.includes('#:~:');

    if (hasTextToSelectInUrl) {
      textToScrollTo = decodeURIComponent(window.performance.getEntriesByType("navigation")[0].name.split('#:~:text=')[1]);
    } else {
      if (!window.location.hash.includes('UL_FORM') && !window.location.hash.includes('#!')) {
        let target = window.location.hash.replace('#', '');

        const isIE = /(MSIE|Trident\/|Edge\/)/i.test(navigator.userAgent);
        if (isIE) {
          window.location.hash = '';
          window.history.replaceState(null, null, window.location.href.split('#')[0]);
        } else {
          navigate(window.location.pathname + window.location.search, { replace: true });
        }
      }
    }
  }, [navigate]);

  useEffect(() => {
    const mq = (query, callback, usePolyfill) => {
      const isMatchMediaSupported = !!(window && window.matchMedia) && !usePolyfill;
      const host = {};

      if (isMatchMediaSupported) {
        const res = window.matchMedia(query);
        callback.apply(host, [res.matches, res.media]);
        res.addListener((changed) => {
          callback.apply(host, [changed.matches, changed.media]);
        });
      }
    };

    const $elem = document.querySelector('[data-sb-uuid="d1818313-9088-4c1c-9cb6-f2ff0d9e9073"]');
    const $section = $elem.closest('.sb-section');
    const hasProperClass = !!($section.classList.contains('option-text-image-float-left') || $section.classList.contains('option-text-image-float-right'));

    mq('(min-width: 767px)', (match) => {
      if (match && hasProperClass) {
        $section.prepend($elem.querySelector('.option-image'));
      } else {
        $elem.querySelector('.sb-text-image__image').prepend($section.querySelector('.option-image'));
      }
    });
  }, []);


  return (
    <div id="sb-page-structure">
      <Header />
      <section
        className="sb-section sb-section-opt-light option-align-left option-image-width-4col option-imagesize-lg option-width-8col option-background-image-fixed option-section-background-contrast-show option-image-align-mobile-left option-background-image-grayscale option-imagecrop-rectangle-portrait option-section-background-image-fixed option-media-left option-image-align-center option-imagesize-mobile-lg"
        style={{}}
      >
        <div className="container sb-container-fixed sb-container">
          <div className="row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center serv">
            <div className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sb-component-text-image">
              <div className="sb-column-content">
                <div
                  className="sb-text-image sb-section-alignable"
                  data-sb-uuid="d1818313-9088-4c1c-9cb6-f2ff0d9e9073"
                >
                  <div className="sb-text-image__content option-width">
                    <div
                      data-aos="slide-up"
                      data-aos-offset="120"
                      data-aos-delay="0"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      className="sb-title sb-text-image__content-title "
                      data-component-field="title"
                      data-sb-field=""
                      data-sb-is-link=""
                      data-sb-type="rich-text"
                      data-sb-uuid="55eecddd-c700-4866-947b-6f2b3d50602e"
                    >
                      {title}
                    </div>
                    <div
                      data-aos="slide-up"
                      data-aos-offset="120"
                      data-aos-delay="100"
                      data-aos-duration="400"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      className="sb-text-image__content-paragraph"
                      data-component-field="paragraph"
                      data-sb-field=""
                      data-sb-is-link=""
                      data-sb-type="rich-text"
                      data-sb-uuid="55eecddd-c700-4866-947b-6f2b3d50602e"
                    >
                      {description}
                    </div>
                    <div className="sb-text-image__content-cta">
                      <div className="sb-cta-wrapper sb-section-alignable ">
                        <span
                          data-aos="slide-up"
                          data-aos-offset="120"
                          data-aos-delay="200"
                          data-aos-duration="400"
                          data-aos-easing="ease-in-out"
                          data-aos-once="true"
                          data-component-field=""
                          data-sb-field=""
                          data-sb-is-link="true"
                          data-sb-type=""
                          data-sb-uuid=""
                        >
                          <Link
                            className="sb-cta-wrapper__btn sb-button sb-button--primary"
                            data-component-field="linkRaw"
                            data-sb-field=""
                            data-sb-is-link="true"
                            data-sb-type=""
                            data-sb-uuid="1c4545f8-e233-440c-95a8-c750999e047a"
                            to="/Contacts"
                            rel=" "
                            target=""
                          >
                            Schedule appointment
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-in"
                    data-aos-offset="120"
                    data-aos-delay="0"
                    data-aos-duration="400"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    className="sb-text-image__image aos-init aos-animate"
                  >
                    <figure
                      className="option-image lazy"
                      data-bg={"url" + "(" + imageUrl + ")"}
                      data-custom-media-style="18ce9e71-a150-4f18-9ef7-6bca2e98eb26"
                      style={{ backgroundImage: `url('${imageUrl}')` }}>
                      <img alt="roberto junior" loading="lazy" src={imageUrl} />
                    </figure>
                    <div
                      className="sb-text-image__image-caption"
                      data-component-field="image"
                      data-sb-field="caption"
                      data-sb-is-link=""
                      data-sb-type="rich-text"
                      data-sb-uuid="18ce9e71-a150-4f18-9ef7-6bca2e98eb26"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sb-id-8487fee0-0588-4cf8-81bf-fbd268bca1f7" className="baner-down sb-section
                  sb-section-opt-accent option-align-left option-hero-cta-2col option-content-width-default option-background-image-fixed sb-hero-simple-section option-width-12col option-background-image-grayscale option-section-background-image-fixed"
               data-sb-id="8487fee0-0588-4cf8-81bf-fbd268bca1f7"  >

        <div className="container sb-container-fixed  sb-container">
          <div id="sb-id-785891dd-40b2-4991-967e-f6a6ee45b8bb" className=" row-my row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center ">
            <div id="sb-id-947c34bb-428c-41ef-95f7-3653ce43e0db" className="sb-column col-xs-12 col-sm-12col-md-12 col-lg-12 col-xl-12 col-xs-offset-0
                          col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-xl-offset-0 sb-component-hero">
              <div id="sb-id-8a121281-d87d-4839-9e48-1cc427b3b0ec" className="sb-column-content ">
                <div className="sb-content sb-hero option-width sb-section-alignable " data-sb-uuid="8a121281-d87d-4839-9e48-1cc427b3b0ec">
                  <div className="sb-hero__content-wrapper">
                    <div data-aos="slide-up" data-aos-offset="120" data-aos-delay="0" data-aos-duration="400"
                         data-aos-easing="ease-in-out" data-aos-once="true" className="sb-title sb-hero__title aos-init aos-animate"
                         data-component-field="title" data-sb-field="text" data-sb-is-link="" data-sb-type="text"
                         data-sb-uuid="10f4eb92-a787-4027-83c5-5c868b761b3e">Get in touch with Prof IT Accounting
                    </div>
                    <div data-aos="slide-up" data-aos-offset="120" data-aos-delay="50" data-aos-duration="400"
                         data-aos-easing="ease-in-out" data-aos-once="true" className="sb-subtitle sb-hero__subtitle aos-init aos-animate"
                         data-component-field="subtitle" data-sb-field="text" data-sb-is-link="" data-sb-type="text"
                         data-sb-uuid="c30f2ee1-2a7c-438d-b36f-4c1f91b547f5">
                      We want to hear from you!
                    </div>
                  </div>
                  <div className="sb-cta-wrapper sb-section-alignable "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ServicesSectionItems;
