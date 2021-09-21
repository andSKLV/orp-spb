import './Carousel.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import SliderArrow from '../SliderArrow/SliderArrow';
import Slide from '../Slide/Slide';
import bannersImg from '../../images/banners__slide-img.jpg';
import foilImg from '../../images/foil__slide-img.png';
import paperPlasticBagsImg from '../../images/paper-plastic-bags__slide-img.png';
import businessCardsImg from '../../images/business-cards__slide-img.png';

export default function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    autoplay: true,
    arrows: true,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow />
  };
  return (
    <Slider {...settings}>
      <Slide title="изготовление баннеров" subtitle="быстро качественно." link="/banners" img={bannersImg}/>
      <Slide title="печать фольгой" subtitle="от 1 шт. БЕЗ КЛИШЕ!" link="/foil-printing" img={foilImg}/>
      <Slide title="полиэтиленовые и бумажные пакеты" subtitle="любых цветов и размеров" link="/paper-plastic-bags" img={paperPlasticBagsImg}/>
      <Slide title="печать визиток" subtitle="на любой вкус и цвет" link="/business-cards" img={businessCardsImg}/>
    </Slider>
  );
}