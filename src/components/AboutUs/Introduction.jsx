import React, { useState, useEffect } from 'react';

const AboutUsSection = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 767);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 767);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Assuming the initial logic you need based on isLargeScreen and specific classes
        const elem = document.querySelector('[data-sb-uuid="a35b7766-07c3-441a-842a-a723764070f2"]');
        const section = elem?.closest(".sb-section");
        const hasProperClass = section?.classList.contains("option-text-image-float-left") || section?.classList.contains("option-text-image-float-right");

        if (isLargeScreen && hasProperClass) {
            const imageContainer = elem.querySelector(".option-image");
            section?.prepend(imageContainer);
        } else {
            const imageTarget = elem?.querySelector(".sb-text-image__image");
            imageTarget?.prepend(imageTarget);
        }
    }, [isLargeScreen]);

    return (
      <div id="sb-page-structure">
        <section
          className="sb-section sb-section-opt-dark option-section-background-contrast-show option-imagesize-lg option-imagecrop-rectangle-portrait option-width-8col option-section-background-image-fixed option-image-width-4col option-imagesize-mobile-lg option-image-align-center option-image-align-mobile-left option-align-left option-media-right option-image-color-grayscale"
          data-sb-id="2e772166-0ab4-42f3-b034-a7854cfc8781"
          id="about-us"
        >
          <div className="container sb-container-fixed sb-container">
            <div className="row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center">
              <div className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 sb-component-text-image">
                <div className="sb-column-content">
                  <div className="sb-text-image sb-section-alignable">
                    <div className="sb-text-image__content option-width">
                      <h2
                        className="sb-title sb-text-image__content-title"
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
                        data-sb-uuid="7c9d9839-e67f-45cb-9250-63c1cd6acd74"
                      >
                        Tired of crunching numbers?
                      </h2>
                      <p
                        className="sb-subtitle sb-text-image__content-subtitle"
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
                        data-sb-uuid="d8a8d1be-99c3-4294-825f-d05313052515"
                      >
                        Let Prof IT Accounting handle all of your accounting
                        needs.
                      </p>
                    </div>
                    <div className="sb-text-image__image">
                      <figure
                        className="option-image lazy introductionImg"
                        data-custom-media-style="f2d18cc1-d1a0-4224-99e8-8fb574b3de59"
                      >
                        <img
                          alt="architecture building business city"
                          loading="lazy"
                          src="../style/asets/img/hero_image-1.jpeg"
                        />
                      </figure>
                    </div>
                  </div>
                  <div id="service"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default AboutUsSection;
