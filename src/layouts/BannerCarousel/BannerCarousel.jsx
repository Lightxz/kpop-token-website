import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./BannerCarousel.css";
import Image1 from "images/banner1.jpg";
import Image2 from "images/banner2.jpg";
import Image3 from "images/banner3.jpg";
import Image4 from "images/banner4.jpg";
import Image5 from "images/banner5.jpg";

function BannerCarousel() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={4000}
      showThumbs={false}
      //   showIndicators={true}
      //   renderIndicator={true}
      showStatus={false}
      className="carouselContainer"
    >
      <div>
        <img src={Image1} />
      </div>
      <div>
        <img src={Image2} />
      </div>
      <div>
        <img src={Image3} />
      </div>
      <div>
        <img src={Image4} />
      </div>
      <div>
        <img src={Image5} />
      </div>
    </Carousel>
  );
}

export default BannerCarousel;
