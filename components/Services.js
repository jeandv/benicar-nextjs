import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from '../styles/Services.module.css';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../helpers/useLanguage';

export const Services = React.memo(({ backgroundColor = '#F4F5F8' }) => {

  const { selectedLanguage } = useLanguage();

  const contentSlider = selectedLanguage.services.slider;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
  }

  const renderSlides = () =>
    contentSlider.map(cont => (
      <>
        <Image src={cont.image}
          alt={'services-' + cont.id}
          width={450}
          height={350}
          objectFit='cover' />
        <div className={Styles.textSlide}>
          <h3>{cont.title}</h3>
          <p>{cont.description}</p>
        </div>
      </>
    ));

  return (
    <section className={Styles.service} style={{ backgroundColor: backgroundColor }}>
      <div>
        <h2>{selectedLanguage.services.subtitle}</h2>
      </div>
      <div className={Styles.serviceSlider}>
        <Slider {...settings}>
          {renderSlides()}
        </Slider>
      </div>
    </section>
  )
})

Services.displayName = 'Services';