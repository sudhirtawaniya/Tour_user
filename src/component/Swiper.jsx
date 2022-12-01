import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";

import "swiper/css";
import "./css/slide.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { Typography } from "@mui/material";
export default () => {
  return (
    <div className="container_swi">
      <div className="leftsw">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          speed={2000}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className={"swipe"}
        >
          <div className="swipei">
            <SwiperSlide>
              {" "}
              <img src="https://picsum.photos/id/1/800/600" alt="bannerimg" />
            </SwiperSlide>
          </div>
          <SwiperSlide>
            <img src="https://picsum.photos/id/2/820/600" alt="bannerimg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/3/800/600" alt="bannerimg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/id/4/800/600" alt="bannerimg" />
          </SwiperSlide>
         
        </Swiper>
      </div>
      <div className="rightsw">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          speed={2000}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className={"swipe"}
        >
          
          <SwiperSlide>
            <img src="https://picsum.photos/id/1/800/600" alt="bannerimg" />
            <div className="text_swi" variant="h4">
            <span>ANDAMAN EXODINARY</span>   <p>CORAL LIFE IS HERE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              height={"600px"}
              src="https://kingsbusinessclub.co.uk/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-29-at-6.44.05-PM-980x735.jpeg"
              alt="bannerimg"
            />
            <div className="text_swi" variant="h4">
           <span>THE SEA ADVENTURES</span>  <p> SAND AND SKY</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              height={"600px"}
              src="https://kingsbusinessclub.co.uk/wp-content/uploads/2021/08/WhatsApp-Image-2021-08-29-at-6.44.05-PM-980x735.jpeg"
              alt="bannerimg"
            />
            <div className="text_swi" variant="h4">
             <span> EXPLORE LIFE</span> <p> CHANGING UNTOUCHED ISLANDS</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="Full" >
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          speed={2000}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className={"swipe"}
        >
          
          <SwiperSlide>
          <img src="https://picsum.photos/id/1/1200/600" alt="bannerimg" />
            <div className="text_swi" variant="h4">
            <span>ANDAMAN EXODINARY</span>   <p>CORAL LIFE IS HERE</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://picsum.photos/id/2/1200/600" alt="bannerimg" />
            <div className="text_swi" variant="h4">
           <span>THE SEA ADVENTURES</span>  <p> SAND AND SKY</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://picsum.photos/id/3/1200/600" alt="bannerimg" />
            <div className="text_swi" variant="h4">
             <span> EXPLORE LIFE</span> <p> CHANGING UNTOUCHED ISLANDS</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
