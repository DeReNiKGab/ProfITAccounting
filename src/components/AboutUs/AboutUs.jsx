import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    const sectionRef = useRef(null); // Ref to the main section for DOM access

    useEffect(() => {
        AOS.init({
            duration: 2000  // values from 0 to 3000, with step 50ms
        });

        const handleResize = () => {
            const section = sectionRef.current;
            const elem = section.querySelector('[data-sb-uuid="df487676-eb9c-4fb5-8eef-d86abe941fd9"]');
            if (window.matchMedia('(min-width: 767px)').matches) {
                if (section.classList.contains('option-text-image-float-left') || section.classList.contains('option-text-image-float-right')) {
                    const imageElem = elem.querySelector('.option-image');
                    section.prepend(imageElem); // Move image to the start of the section
                } else {
                    const imageElem = section.querySelector('.option-image');
                    elem.querySelector('.sb-text-image__image').prepend(imageElem); // Move image back to its original container
                }
            }
        };

        // Listen to resize events
        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set up

        // Clean up effect
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
      <div id="sb-page-structure">
        <section
          ref={sectionRef}
          id="about"
          className="sb-section  sb-section-opt-light option-text-image-overlap option-imagecrop-rectangle-portrait option-image-width-7col option-image-align-mobile-center option-width-6col option-image-align-center option-section-background-image-fixed option-align-left"
          data-sb-id="d15d6d66-f093-4b05-8082-8f511031e66d"
        >
          <div className="topDivide container sb-container-fixed sb-container">
            <div className="container sb-container-fixed sb-container">
              <div className="row sb-row sb-row-opt-padding-top-large  sb-row-opt-padding-bottom-large sb-row-opt-center">
                <div
                  className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12  col-xl-12 col-xs-offset-0
                            col-sm-offset-0 col-md-offset-0 col-lg-offset-0 col-xl-offset-0 sb-component-text-image"
                >
                  <div className="sb-column-content">
                    <div
                      className="sb-text-image sb-section-alignable"
                      data-sb-uuid="df487676-eb9c-4fb5-8eef-d86abe941fd9"
                    >
                      <div className="sb-text-image__content option-width">
                        <h2
                          data-aos="slide-up"
                          data-aos-offset="120"
                          data-aos-delay="0"
                          data-aos-duration="400"
                          data-aos-easing="ease-in-out"
                          data-aos-once="true"
                          className="sb-title sb-text-image__content-title "
                          data-component-field="title"
                          data-sb-field="text"
                          data-sb-is-link=""
                          data-sb-type="text"
                          data-sb-uuid="cfce8531-c06f-4295-878c-b6c0b138a176"
                        >
                          <strong>Բարի գալուստ Prof IT</strong>
                        </h2>
                        <div
                          data-aos="slide-up"
                          data-aos-offset="120"
                          data-aos-delay="100"
                          data-aos-duration="400"
                          data-aos-easing="ease-in-out"
                          data-aos-once="true"
                          className="sb-text-image__content-paragraph"
                          data-component-field="paragraph"
                          data-sb-field="text"
                          data-sb-is-link=""
                          data-sb-type="rich-text"
                          data-sb-uuid="24a91fc2-d1e5-4e04-ad1f-8cbb39eb86cc"
                        >
                          <p>
                            <strong>Prof IT</strong>-ում մենք հասկանում ենք, որ
                            յուրաքանչյուր թվի հետևում առկա է եզակի պատմություն:
                            Մեր հաշվապահական ընկերությունը, որը գտնվում է վ-ում,
                            մասնագիտանում է ձեր ֆինանսական կարիքները հաջողության
                            պատմությունների վերածելու մեջ՝ մանրակրկիտ
                            հաշվապահության և հատուկ ֆինանսական խորհրդատվության
                            միջոցով:
                          </p>
                          <h3>
                            <strong>Մեր Փորձառությունը</strong>
                          </h3>
                          <p>
                              [Name]-ի և [Name]-ի կողմից հիմնադրված մեր ընկերությունը բերում է
                              միասին ավելի քան [X] տարվա համատեղ փորձ
                              հաշվապահական հաշվառման ոլորտը.
                          </p>
                          <h3>
                            <strong>Ինչու՞ ընտրել մեզ?</strong>
                          </h3>
                          <ul>
                            <li>
                                <strong>Անհատականացված ծառայություն.</strong> Լինելով ա
                                փոքր ընկերություն, մենք հպարտանում ենք մեր ունակությամբ
                                յուրաքանչյուրին տրամադրել անհատական և նվիրված ծառայություն
                                մեր հաճախորդներից:
                            </li>
                            <li>
                                <strong>Փորձագետի ուղեցույց.</strong> Տասնամյակների ընթացքում
                                փորձը, մենք ապահովում ենք, որ ձեր ֆինանսական
                                որոշումները տեղեկացված են, արդյունավետ և հարմարեցված
                                ձեր նպատակները.
                            </li>
                            <li>
                                <strong>Վստահություն և ազնվություն.</strong> Մենք հավատում ենք
                                միջոցով վստահություն ստեղծելով մեր հաճախորդների հետ
                                պարզ և հուսալի հաղորդակցություն
                                արդյունքները։
                            </li>
                          </ul>
                          <h3>
                            <strong>Մեր Պարտավորությունը</strong>
                          </h3>
                          <p>
                              Անկախ նրանից, թե դուք ցանկանում եք պարզեցնել ձեր բիզնեսը
                              ֆինանսներ, վստահորեն լուծել հարկային սեզոնը կամ պլանավորել
                              ձեր ապագայի համար, մենք այստեղ ենք՝ առաջնորդելու ձեզ յուրաքանչյուր քայլ
                              ճանապարհին։ Միացեք մեզ <strong>Prof IT</strong>-ում,
                              որտեղ ձեր ֆինանսական բարեկեցությունը մեր առաջնահերթությունն է:
                          </p>
                        </div>
                        <div className="sb-text-image__content-cta"></div>
                      </div>
                      <div
                        data-aos="fade-in"
                        data-aos-offset="120"
                        data-aos-delay="0"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className="sb-text-image__image"
                      >
                        <figure
                          data-bg="url(https://cdn.b12.io/media/79c1cdf4-3cae-11e8-9f2d-0242ac11000f-jpg-hero_image.jpeg)"
                          className="option-image lazy aboutUsImg"
                          data-custom-media-style="dfa51c1a-04bc-4731-9c48-c83cd1f20bbc"
                          skip-data-sb=""
                        >
                          <img
                            alt="43e31978-88f3-11e7-8759-0242ac110003-breather-168765.jpg"
                            loading="lazy"
                            src="https://cdn.b12.io/media/79c1cdf4-3cae-11e8-9f2d-0242ac11000f-jpg-hero_image.jpeg"
                          />
                        </figure>
                        <div
                          className="sb-text-image__image-caption"
                          data-component-field="image"
                          data-sb-field="caption"
                          data-sb-is-link=""
                          data-sb-type="rich-text"
                          data-sb-uuid="dfa51c1a-04bc-4731-9c48-c83cd1f20bbc"
                        ></div>
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
};

export default AboutUs;
