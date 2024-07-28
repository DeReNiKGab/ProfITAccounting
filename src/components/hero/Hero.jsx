import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// HeroSection Component
const HeroSection = () => {
        useEffect(() => {
            AOS.init({
                duration : 2000  // values from 0 to 3000, with step 50ms
            });
        }, []);
  return (
      <div id="sb-page-structure">
        <section
            className="sb-section sb-section-opt-dark has-background option-hero-content-box option-width-6col sb-hero-simple-section option-section-hero option-align-left option-vertical-align-bottom option-background-video-poster-none option-background-image-blend-mode-screen option-section-skew-padding-bottom option-section-overlap-bottom"
            data-sb-id="7154566d-d776-4f83-9ab5-c48af481d643"
            id="home"
            style={{minHeight: '65vh'}}
        >
          <div
              className="sb-background"
              style={{
                backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url("https://cdn.b12.io/client_media/RXJufhPa/dd7b203c-fc8a-11ee-9617-0242ac110002-jpg-hero_image.jpeg")'
              }}
          ></div>
          <div className="container sb-container-fixed sb-container">
            <div className="row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center">
              <div className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sb-component-hero">
                <div className="sb-column-content">
                  <div className="sb-content sb-hero option-width sb-section-alignable">
                      <div className="sb-hero__content-wrapper">
                          <h1
                              className="sb-title sb-hero__title"
                              data-aos="slide-up"
                              data-aos-delay="0"
                              data-aos-duration="400"
                              data-aos-easing="ease-in-out"
                              data-aos-offset="120"
                              data-aos-once="true"
                              data-component-field="title"
                              data-sb-field="text"
                              data-sb-is-link=""
                              data-sb-type="text"
                              data-sb-uuid="6c40aafe-4e9e-450c-95c3-13e238709fe7"
                          >
                              Փորձագիտական Հաշվառում
                          </h1>
                          <div
                              className="sb-subtitle sb-hero__subtitle"
                              data-aos="slide-up"
                              data-aos-delay="50"
                              data-aos-duration="400"
                              data-aos-easing="ease-in-out"
                              data-aos-offset="120"
                              data-aos-once="true"
                              data-component-field="subtitle"
                              data-sb-field="text"
                              data-sb-is-link=""
                              data-sb-type="text"
                              data-sb-uuid="5aa34942-86a1-4848-9ffb-c0d5791637b2"
                          >
                              Մասնագիտական հաշվապահական ծառայություններ բիզնեսի համար                          </div>
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

export default HeroSection;
