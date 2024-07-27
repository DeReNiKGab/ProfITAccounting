import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function AboutAccounting() {

    useEffect(() => {
        AOS.init({
            duration: 2000  // values from 0 to 3000, with step 50ms
        });

    }, []);

    return (
      <div id="sb-page-structure">
        <section
          id="about"
          className="sb-section sb-section-opt-light option-image-align-default option-image-width-12col option-width-8col option-order-title-subtitle-text-image-cta option-image-align-mobile-default option-section-background-image-fixed option-imagesize-lg option-section-hero option-imagecrop-rectangle-landscape"
          data-sb-id="8d456666-e702-4923-badd-7ae3db5716dc"
        >
          <div className="topDivide container sb-container-fixed sb-container">
            <div
              id="sb-id-34663bf0-3799-4a7e-92d2-0aec11beab6e"
              className="row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center"
            >
              <div
                id="sb-id-cf0ba1dc-3add-4f1b-bb1e-462827c50b7e"
                className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-xl-offset-0 sb-component-text-image-vertical"
              >
                <div className="sb-column-content">
                  <div
                    className="sb-text-image-vertical sb-section-alignable"
                    data-sb-uuid="68c92d85-cbe2-4405-b827-5a4b7cfaed2a"
                  >
                    <div className="sb-text-image-vertical__content">
                      <h3
                        data-aos="slide-up"
                        data-aos-offset="120"
                        data-aos-delay="0"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className="aboutAccounting sb-section-title option-width sb-text-image-vertical__content-title"
                        data-component-field="title"
                        data-sb-field="text"
                        data-sb-is-link=""
                        data-sb-type="text"
                        data-sb-uuid="60ebb242-c67f-4831-b0c3-74c3de12b3ad"
                      >
                        <strong>A Brief History of Accounting</strong>
                      </h3>
                      <h2
                        data-aos="slide-up"
                        data-aos-offset="120"
                        data-aos-delay="50"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className="sb-section-subtitle option-width sb-text-image-vertical__content-subtitle"
                        data-component-field="subtitle"
                        data-sb-field="text"
                        data-sb-is-link=""
                        data-sb-type="text"
                        data-sb-uuid="fb38dfe1-d4b3-4583-8368-376d038ccdb9"
                      >
                        From Ancient Records to Modern Finance
                      </h2>
                      <div
                        data-aos="slide-up"
                        data-aos-offset="120"
                        data-aos-delay="100"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className="sb-paragraph option-width sb-text-image-vertical__content-paragraph"
                        data-component-field="paragraph"
                        data-sb-field="text"
                        data-sb-is-link=""
                        data-sb-type="rich-text"
                        data-sb-uuid="75a0b193-0ceb-419e-ab64-a1cb1ba33c61"
                      >
                        <p>
                          <strong>
                            <em>Ancient Beginnings</em>
                          </strong>
                        </p>
                        <p>
                          The history of accounting dates back to ancient
                          civilizations, including Mesopotamia, Egypt, and Rome,
                          where basic bookkeeping was practiced as a way to keep
                          records of trade and property. These early accounting
                          records were kept on clay tablets and papyrus,
                          detailing transactions and inventories that were
                          crucial for managing estates and governmental
                          planning.
                        </p>
                        <p>
                          <strong>
                            <em>The Middle Ages</em>
                          </strong>
                        </p>
                        <p>
                          The development of double-entry bookkeeping is one of
                          the most significant milestones in the history of
                          accounting. This system, which involves recording each
                          transaction in two accounts (debit and credit), was
                          first documented in 1494 by Luca Pacioli, an Italian
                          mathematician and Franciscan friar. His work, "Summa
                          de Arithmetica, Geometria, Proportioni et
                          Proportionalita," laid the foundation for modern
                          accounting practices and earned him the title "The
                          Father of Accounting."
                        </p>
                        <p>
                          <strong>
                            <em>The Industrial Revolution</em>
                          </strong>
                        </p>
                        <p>
                          The Industrial Revolution brought significant changes
                          to the business world, and with it, the need for more
                          sophisticated accounting systems. As businesses grew
                          and financial operations became more complex, the role
                          of accountants became more prominent. During this
                          period, the profession began to formalize; accounting
                          firms were established, and standardized methods were
                          developed.
                        </p>
                        <p>
                          <strong>
                            <em>20th Century Advancements</em>
                          </strong>
                        </p>
                        <p>
                          The 20th century saw major advancements in accounting
                          due to the introduction of technology and the
                          globalization of business. The creation of accounting
                          software in the latter half of the century transformed
                          the field, automating many processes and increasing
                          the accuracy and efficiency of accounting practices.
                          Additionally, international accounting standards began
                          to emerge, facilitating the global comparison and
                          consistency of financial reporting.
                        </p>
                        <p>
                          <strong>
                            <em>Contemporary Accounting</em>
                          </strong>
                        </p>
                        <p>
                          Today, accounting is a highly regulated profession
                          critical to the functioning of financial markets and
                          management within companies. It encompasses various
                          fields, including financial accounting, management
                          accounting, auditing, and tax accounting. The
                          introduction of advanced technologies like AI and
                          blockchain presents new opportunities and challenges,
                          shaping the future of accounting in the digital age.
                        </p>
                      </div>
                      <div className="sb-text-image-vertical__content-cta">
                        <div className="sb-cta-wrapper sb-section-alignable sb-btn-full-width"></div>
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

export default AboutAccounting;
