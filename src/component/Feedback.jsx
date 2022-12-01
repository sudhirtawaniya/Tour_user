import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import StarIcon from '@mui/icons-material/Star';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Navigation } from "swiper";
// import required modules
import { Autoplay,EffectFade } from "swiper";
import "./css/feedback.css";
export default () => {
  const[scrwidth,chwidth]=useState(window.innerWidth);
  const [row,setrow]=useState(3);
  useEffect(()=>{
    if(scrwidth<=1200 && scrwidth>=700)setrow(2);
    if(scrwidth<700)setrow(1);
    if(scrwidth>1200)setrow(3);

  },[scrwidth])
  return (
    <>
      <div className="container_fe">
        <div className="header_fe">
        <h2>What Our Client Say About Us</h2>
        
        </div>
       <div className="swiper_fe">
        {/* <Swiper
          slidesPerView={row}
          spaceBetween={25}
          modules={[EffectFade,Autoplay]}
          speed={3000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card_fe">
              <div className="img_fe">
                <img
                  src="https://tourxpro-react.b-cdn.net/images/reviewer/r-sm3.png"
                  alt="img"
                />
              </div>
              <div className="text_c_fe">
                <p>
                  anything about review here willDuis rutrum nisl urna. Maecenas
                  vel libero this faucibus nisi venenatis hendrerit a id
                  lectus.P Suspendissendt molestie turpis nec laciniane vehicula
                  volutpat purus. pase some thing about YRP to
                </p>
              </div>
              <div className="rating_fe">
                <div className="name"><h6>Sudhir Tawaniya</h6></div>
                <div className="rating">
                    {[1,2,3,4,5].map(()=>{return <StarIcon style={{color:"orangered"}}/>})}
                </div>
              </div>
            </div>{" "}
            
          </SwiperSlide>
        
          <SwiperSlide>
            <div className="card_fe">
              <div className="img_fe">
                <img
                  src="https://tourxpro-react.b-cdn.net/images/reviewer/r-sm3.png"
                  alt="img"
                />
              </div>
              <div className="text_c_fe">
                <p>
                  anything about review here will Duis rutrum nisl urna.
                  Maecenas vel libero this faucibus nisi venenatis hendrerit a
                  id lectus.P Suspendissendt molestie turpis nec laciniane
                  vehicula volutpat purus. pase some thing about YRP to frree
                  vdk
                </p>
              </div>
              <div className="rating_fe">
                <div className="name"><h6>Sudhir Tawaniya</h6></div>
                <div className="rating">
                    {[1,2,3,4,5].map(()=>{return <StarIcon style={{color:"orangered"}}/>})}
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="card_fe">
              <div className="img_fe">
                <img
                  src="https://tourxpro-react.b-cdn.net/images/reviewer/r-sm3.png"
                  alt="img"
                />
              </div>
              <div className="text_c_fe">
                <p>
                  anything about review here Duis rutrum nisl urna. Maecenas vel
                  libero this faucibus nisi venenatis hendrerit a id lectus.P
                  Suspendissendt molestie turpis nec laciniane vehicula volutpat
                  purus. will pase some thing about YRP to frree vdk
                </p>
              </div>
              <div className="rating_fe">
                <div className="name"><h6>Sudhir Tawaniya</h6></div>
                <div className="rating">
                    {[1,2,3,4,5].map(()=>{return <StarIcon style={{color:"orangered"}}/>})}
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="card_fe">
              <div className="img_fe">
                <img
                  src="https://tourxpro-react.b-cdn.net/images/reviewer/r-sm3.png"
                  alt="img"
                />
              </div>
              <div className="text_c_fe">
                <p>
                  anything about review here Duis rutrum nisl urna. Maecenas vel
                  libero this faucibus nisi venenatis hendrerit a id lectus.P
                  Suspendissendt molestie turpis nec laciniane vehicula volutpat
                  purus. will pase some thing about YRP to frree vdk
                </p>
              </div>
              <div className="rating_fe">
                <div className="name"><h6>Sudhir Tawaniya</h6></div>
                <div className="rating">
                    {[1,2,3,4,5].map(()=>{return <StarIcon style={{color:"orangered"}}/>})}
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide>
            <div className="card_fe">
              <div className="img_fe">
                <img
                  src="https://tourxpro-react.b-cdn.net/images/reviewer/r-sm3.png"
                  alt="img"
                />
              </div>
              <div className="text_c_fe">
                <p>
                  anything about review here Duis rutrum nisl urna. Maecenas vel
                  libero this faucibus nisi venenatis hendrerit a id lectus.P
                  Suspendissendt molestie turpis nec laciniane vehicula volutpat
                  purus. will pase some thing about YRP to frree vdk
                </p>
              </div>
              <div className="rating_fe">
                <div className="name"><h6>Sudhir Tawaniya</h6></div>
                <div className="rating">
                    {[1,2,3,4,5].map(()=>{return <StarIcon style={{color:"orangered"}}/>})}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
        <div className="elfsight-app-4dddf75a-18c5-49ce-8e76-8bdc616e22d0" ></div>
      </div>
      </div>
    </>
  );
};
