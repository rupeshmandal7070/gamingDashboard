import React from 'react'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../../components/Home/Card';



const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineLeft className='gradientColorYellow'  style={{
        color: '#052A5A',
        zIndex: 100,  
        background: '#fff',   
        borderRadius: '50px',  
        fontSize: '35px',   
        marginleft: '500px',
        top: '-10px !important',   
      }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <AiOutlineRight className='gradientColorYellow' style={{
        background: 'linear-gradient(to right, #E2A100 50%, #D89100 50%)',
        color: '#052A5A',
        zIndex: 100,  
        background: '#fff',   
        borderRadius: '50px',  
        fontSize: '35px', 
        right:'0',  
        marginRight: '1000px',
        top: '-10px !important',   
      }} />
    </div>
  );
};



function Block4() {

    
  const settings= {
      prevArrow:<PreviousBtn />,
      nextArrow:<NextBtn />,
      dots: false,
      infinite: false,
      arrows:false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  
  return (
    <div className='w-full flex justify-center mt-5 py-3'>
        <div className='w-[97%] '>
            <div className='w-full flex justify-between'>
                <h1 className='flex text-4xl font-semibold text-[#fff] w-1/2 gap-2'><img src='http://www.matic247.com/assets/images/frontend/homepage_section_icon/64b65866d37491689671782.png'  alt='homeIcon' />Hot and New Casino</h1>
                <div className='flex text-[#fff] text-xl gap-2'>
                    <button className='gradientColorPurple px-5'>See All</button>
                </div>
            </div>

            <div className="casino__box ">
                        <img src="http://www.matic247.com/assets/images/frontend/hot_and_new_casino_images/64b971437df491689874755.png" alt="game" />
                        </div>
            
            <div className='ml-2 md:ml-0'>
                    {/* <Slider {...settings} > */}
                      {/* { */}
                        
                      {/* } */}
                    {/* </Slider> */}
            </div>
        </div>
      
    </div>
  )
}

export default Block4
