import React from 'react'
import {IoIosFootball} from "react-icons/io"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../../components/Home/Card';

const providerHomeData = [
    {
        id:1,
        img:"http://www.matic247.com/assets/images/frontend/provider_images/64b967c8a8e221689872328.png"
    },
    {
        id:2,
        img:"http://www.matic247.com/assets/images/frontend/provider_images/64b967c8a8e221689872328.png"
    },
    {
        id:3,
        img:"http://www.matic247.com/assets/images/frontend/provider_images/64b967c8a8e221689872328.png"
    },
    {
        id:4,
        img:"http://www.matic247.com/assets/images/frontend/provider_images/64b967c8a8e221689872328.png"
    },
    {
        id:5,
        img:"http://www.matic247.com/assets/images/frontend/provider_images/64b967c8a8e221689872328.png"
    },
    {
        id:6,
        img:"http://www.matic247.com/assets/images/frontend/provider_images/64b967c8a8e221689872328.png"
    },
    {
        id:7,
        img:"http://www.matic247.com/assets/images/frontend/provider_images/64b967c8a8e221689872328.png"
    },
]



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
        <div className='w-[97%] bg-[#17191B] p-3 rounded-lg'>
            <div className='w-full flex justify-between'>
                <h1 className='flex text-4xl font-semibold text-[#fff] w-1/2 gap-2'><img src='http://www.matic247.com/assets/images/frontend/homepage_section_icon/64b65ae0ef47f1689672416.png'  alt='homeIcon' />Provider</h1>
                 
            </div>
            
            <div className='mt-5'>
                <div className=' flex gap-3 justify-start items-center'>
                    {
                        providerHomeData.map((item,i)=>(
                            <div key={i} className='px-5 py-5 bg-[#24262B] hover:bg-[#A17A11] rounded-md'>
                                <img src={item.img} alt="provider Image" className='rounded-md'/>
                            </div>
                        ))
                    }
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Block4
