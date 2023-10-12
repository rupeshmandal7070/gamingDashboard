import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 


 

const ButtonsGlider = ({ data }) => {
  return (
    <>
      <Swiper
      spaceBetween={0}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     >

      {
        data.map((item)=> (
          <SwiperSlide className={`${item.Route === "/" ? "bg-[#987712]" : "bg-[#2F4553]"}`}>{item.icons}{item.name}</SwiperSlide>
        ))
      }
    </Swiper>
 
 
       {/* {  
            data.map((item,index)=>(
                <div key={index}
                className={`    ${item.Route === "/" ? "bg-[#987712]" : "bg-[#2F4553]"}`}
                    >
                
              {item.icons} {item.name}
              </div> 
              ))} */}
 
    </>
  
   
          
      
  );
};

export default ButtonsGlider;
