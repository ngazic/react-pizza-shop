import React from "react";
import {getData} from "../../dummy-data";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const pizzas = getData();

const HomeCarousel = () => {
  return (
    <section className="section-bg_mod-c">
      <Carousel
        showThumbs={false}
        interval={2500}
        autoPlay={true}
        showStatus={false}
        className="container"
        swipeable={true}
        renderIndicator={false}
        stopOnHover={true}
        infiniteLoop={true}
        emulateTouch={true}
      >
        {Object.keys(pizzas).map((pizza, index) => {
          console.log("pizzas are");
          console.log(pizza);
          return (
            <div class="owl-item">
              <div class="slider-type-a__item">
                <div class="slider-type-a__img">
                  <img
                    class="img-fluid"
                    src={require(`../../assets/images/list-catalog/${pizzas[pizza].image}.png`)}
                    height="617"
                    width="618"
                    alt="Foto"
                  />
                </div>
                <div class="slider-type-a__inner">
                  <div class="slider-type-a__name">{pizza}</div>
                  <div class="slider-type-a__price">
                    ${pizzas[pizza].price.Small} - $
                    {pizzas[pizza].price.Party}
                  </div>
                  <div class="slider-type-a__description">
                    {pizzas[pizza].text}
                  </div>
                  <Link
                    to="menu"
                    class="ui-btn ui-btn-primary btn-effect"
                    href="#"
                  >
                    order now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default HomeCarousel;
