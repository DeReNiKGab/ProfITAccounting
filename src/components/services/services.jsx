import React from 'react';
import {Link} from "react-router-dom";
import img1 from  "../../style/asets/img/Services/1.jpeg"
import img2 from  "../../style/asets/img/Services/2.jpeg"
import img3 from  "../../style/asets/img/Services/3.jpeg"
import img4 from  "../../style/asets/img/Services/4.jpeg"
import img5 from  "../../style/asets/img/Services/5.jpeg"
import img6 from  "../../style/asets/img/Services/6.jpeg"

const servicesList = [
  {
    id: 'tax-preparation',
    title: 'Բիզնես խորհրդատվություն',
    description: 'Մեր մասնագետները կաջակցեն Ձեզ կատարել Ձեր առաջին քայլը բիզնեսում, տալով բիզնես խորհրդատվություն ֆինասական հատվածի, հարկային բեռի և այն ամենի մասով որը առնչվում է Ձեր բիզնես գործընթացներին:',
    imageUrl: [img1],
  },
  {
    id: 'bookkeeping',
    title: 'Հաշվապահական հաշվառման վարում',
    description: 'Մեր պրոֆեսիոնալ հաշվապահական թիմը կօգնի Ձեզ վարել ֆինանսական հաշվառում համաձայն` հաշվապահական հաշվառման միջազգային ստանդարտների, կազմել` Ֆինանսական, հարկային և վիճակագրական հաշվետվությունները:',
    imageUrl: [img2],
  },
  {
    id: 'payroll-management',
    title: 'Հարկային հաշվետվությունների պատրաստում և ներկայացում',
    description: 'Մեր թիմը կօգնի Ձեզ հարկային հաշվետվությունների ճիշտ և ժամանակին պատրաստման և ներկայացման հարցում',
    imageUrl: [img3],
  },
  {
    id: 'financial-consulting',
    title: 'Կադրային գործի վարում',
    description: 'Իր մեջ ներառում է`` \n' +
        '1) Աշխատանքային պայմանագրերի կազմում\n' +
        '2) Աշխատավարձի հաշվառում և վճարում\n' +
        '3) Արձակուրդային վճարի,  անաշխատունակության նպաստի և վերջնահաշվարկի հաշվարկում և վճարում\n' +
        '4) Աշխատանքից բխող այլ ծառայությունների մատուցում',
    imageUrl: [img4],
  },
  {
    id: 'tax-planning',
    title: 'Բիզնես պլանավորում',
    description: 'Ցանկանում եք բիզնեսով զբաղվե(հարցական)լ, բայց չգիտե(հարցական)ք որտեղից սկսել, մենք կօգնենք քեզ քայլ առ քայլ իրագործել քո բիզնես գաղափարը',
    imageUrl: [img5],
  },
  {
    id: 'financial-reporting',
    title: 'Վիճակագրական հաշվետվությունների պատրաստում և ներկայացում',
    description: 'Կախված գործունեության տեսակից, որոշ տնտեսվարող սուբյեկտներ բացի ֆինանսական և հարկային հաշվետվություններ ներկայացնելուց, կրում են պարտավրություն նաև վիճակագրական հաշվետվություններ կազմելու և ներկայացնելու\n' +
        'Մեր թիմը կօգնի Ձեզ այդ հարցում ևս',
    imageUrl: [img6],
  }
];

const truncate = (str, max, len) => {
  return  str ? str.length > max ? str.substring(0, len) + "..." : str : '';
};

const ServicesSection = () => {
  return (
    <div id="sb-page-structure">
      <section
        className="sb-section sb-section-opt-light option-imagecrop-square option-items-grid-content-overlay option-align-left option-align-content-center option-columns-3col option-width-12col option-button-none option-section-background-image-fixed option-imagesize-lg"
        id="services"
      >
        <div className="container sb-container-fixed sb-container">
          <div className="row sb-row sb-row-opt-padding-top-large sb-row-opt-padding-bottom-large sb-row-opt-center">
            <div className="sb-column col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="sb-column-content">
                <div className="sb-list-with-filters sb-section-alignable">
                  <div className="sb-list-with-filters__content">
                    <h2
                      className="sb-section-title sb-section-alignable option-width"
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
                      data-sb-uuid="ae8048ba-425d-4c1b-910c-1d087ee26993"
                    >
                      Փորձագիտական Հաշվառում
                    </h2>
                    <p
                      className="sb-section-subtitle sb-section-alignable option-width"
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
                      data-sb-uuid="762d745a-fe0a-41da-b340-cd8b8070b702"
                    >
                      Մասնագիտական հաշվապահական ծառայություններ բիզնեսի համար.
                    </p>
                    <p className="sb-paragraph">
                      Մեր փորձառու հաշվապահների թիմը տրամադրում է համապարփակ
                      հաշվապահական լուծումներ, որոնք կօգնեն ձեզ վստահորեն
                      կառավարել ձեր ֆինանսները: Հաշվապահությունից մինչև հարկերի
                      պատրաստում, մենք ձեզ ծածկում ենք:
                    </p>
                  </div>
                  <div className="sb-list-with-filters__list">
                    <ul className="items-grid sb-list">
                      {servicesList.map((service) => (
                        <li
                          key={service.id}
                          className="items-grid__item items-grid__item--bg- tag-all"
                        >
                          <div className="items-grid__item-body">
                            <figure
                              className="option-image grid-with-lightbox__item lazy"
                              style={{
                                backgroundImage: `url('${service.imageUrl}')`,
                              }}
                            >
                              <img
                                alt={service.title}
                                src={service.imageUrl}
                                loading="lazy"
                              />
                            </figure>
                            <div className="items-grid__item-content">
                              <h3 className="items-grid__header">
                                {truncate(service.title, 30, 30)}
                              </h3>
                              <p className="items-grid__note">
                                {truncate(service.description, 70, 70)}
                              </p>
                              <Link
                                to={`/Service-Items?imageUrl=${encodeURIComponent(service.imageUrl)}&title=${encodeURIComponent(service.title)}&description=${encodeURIComponent(service.description)}`}
                                className="items-grid__link"
                              >
                                Կարդալ ավելին
                              </Link>
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
