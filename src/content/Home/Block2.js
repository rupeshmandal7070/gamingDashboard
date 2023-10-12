import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Block2() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        slidesToScroll: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:false,
        infinite:true
      };
  return (
    <div className='w-full flex flex-col justify-center items-center mt-5 md:mt-10 lg:mt-32'>
        <div className='max-h-48 md:h-max flex flex-col-reverse justify-start text-center items-center w-[97%] rounded-3xl relative '>
          <div className='w-full h-48 md:h-full rounded-3xl '> 
            <Slider {...settings}>
                <div className='relative'>
                    <img src="http://www.matic247.com/assets/images/frontend/banner/64b6bedc734ff1689698012.jpg" alt='home_image' className='w-full h-48 md:h-full object-fill rounded-3xl overflow-hidden' />
                    <div className='absolute gradientColorPurple px-1 md:px-6 py-2 md:py-3 rounded-md  translate-x-1 md:translate-x-4 -translate-y-[84px] md:-translate-y-32  cursor-pointer'>
                        Claim Bonus 
                    </div>
                </div>
                <div className='relative'>
                    <img src="http://www.matic247.com/assets/images/frontend/banner/64b6bedc734ff1689698012.jpg" alt='home_image' className='w-full h-48 md:h-full object-fill rounded-3xl overflow-hidden' />
                    <div className='absolute gradientColorPurple px-1 md:px-6 py-2 md:py-3 rounded-md  translate-x-1 md:translate-x-4 -translate-y-[84px] md:-translate-y-32  cursor-pointer'>
                        Claim Bonus 
                    </div>
                </div>
                <div className='relative'>
                    <img src="http://www.matic247.com/assets/images/frontend/banner/64b6bedc734ff1689698012.jpg" alt='home_image' className='w-full h-48 md:h-full object-fill rounded-3xl overflow-hidden' />
                    <div className='absolute gradientColorPurple px-1 md:px-6 py-2 md:py-3 rounded-md  translate-x-1 md:translate-x-4 -translate-y-[84px] md:-translate-y-32  cursor-pointer'>
                        Claim Bonus 
                    </div>
                </div>
                <div className='relative'>
                    <img src="http://www.matic247.com/assets/images/frontend/banner/64b6bedc734ff1689698012.jpg" alt='home_image' className='w-full h-48 md:h-full object-fill rounded-3xl overflow-hidden' />
                    <div className='absolute gradientColorPurple px-1 md:px-6 py-2 md:py-3 rounded-md  translate-x-1 md:translate-x-4 -translate-y-[84px] md:-translate-y-32  cursor-pointer'>
                        Claim Bonus 
                    </div>
                </div> 
                
                
            </Slider>
            </div> 
           
            <div className="gradientColorPurple text-[#fff] h-10 rounded-b-3xl w-full  overflow-hidden absolute" >
                <div className='bg-[#753CE9] w-8 h-full z-10 absolute'>
                    <img src='/icons8-speaker-48.png' className='h-5 w-5 ml-2 mt-2 '/>
                </div>
                <div className="text-animation text-center font-semibold text-sm mt-3 ">
                    It's 
                    time to kick ass and chew bubble gum… and
                     I'm
                      all outta gum.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Block2
