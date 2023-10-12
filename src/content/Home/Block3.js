import React from 'react'
import {IoIosFootball} from "react-icons/io"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const  HomeUpComingSportsData = [
    {
        id:1,
        name:"ICC World Cup Qualifier",
        firstTeam:"Scotland",
        secondTeam:"Netherlands",
        time:"07:08 AM"
    },
    {
      id:1,
      name:"ICC World Cup Qualifier",
      firstTeam:"Scotland",
      secondTeam:"Netherlands",
      time:"07:08 AM"
  },
  {
    id:1,
    name:"ICC World Cup Qualifier",
    firstTeam:"Scotland",
    secondTeam:"Netherlands",
    time:"07:08 AM"
},
{
  id:1,
  name:"ICC World Cup Qualifier",
  firstTeam:"Scotland",
  secondTeam:"Netherlands",
  time:"07:08 AM"
},
{
  id:1,
  name:"ICC World Cup Qualifier",
  firstTeam:"Scotland",
  secondTeam:"Netherlands",
  time:"07:08 AM"
},
{
  id:1,
  name:"ICC World Cup Qualifier",
  firstTeam:"Scotland",
  secondTeam:"Netherlands",
  time:"07:08 AM"
},
{
  id:1,
  name:"ICC World Cup Qualifier",
  firstTeam:"Scotland",
  secondTeam:"Netherlands",
  time:"07:08 AM"
},
{
  id:1,
  name:"ICC World Cup Qualifier",
  firstTeam:"Scotland",
  secondTeam:"Netherlands",
  time:"07:08 AM"
},{
  id:1,
  name:"ICC World Cup Qualifier",
  firstTeam:"Scotland",
  secondTeam:"Netherlands",
  time:"07:08 AM"
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



function Block3() {

    
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
            <div className='w-full flex justify-between '>
                <h1 className='flex text-xl md:text-2xl lg:text-4xl font-semibold text-[#fff] '><IoIosFootball/>Upcoming Sport</h1>
                <div className='flex text-[#fff] text-xl gap-2'>
                     
                    <button className='gradientColorPurple px-5'>See All</button>
                </div>
            </div>
            <div className='mt-5'>
                <div className='ml-2 md:ml-0'>
                    <Slider {...settings} >
                      {
                        HomeUpComingSportsData.map((item,i)=>(
                          <div key={i} className='border-black border bg-[#282A30]  !w-[95%]  h-[150px] rounded-lg p-3 flex flex-col justify-around'>
                              <div className='flex justify-between'>
                        <div className='flex justify-between text-center items-center gap-1'>
                            <IoIosFootball className='text-xl text-gray-600'/>
                            <p className='text-[#fff] font-normal  text-sm'>ICC World Cup Qualifier</p>
                        </div>
                        <p className='text-[#fff] text-sm'>2023-07-23</p>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <div className='flex justify-center items-center flex-col '>
                            <img src="/sports.png"  alt='upcoming_image'/>
                            <p className='text-gray-600 text-base'>Sri Lanka</p>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <p className='text-2xl font-bold text-[#FBB600]'>VS</p>
                            <p className='flex text-[#fff] font-semibold text-base text-center w-10'>07:08 AM</p>
                        </div>
                        <div className='flex justify-center items-center flex-col '>
                            <img src="/sports.png"  alt='upcoming_image'/>
                            <p className='text-gray-600 text-base'>Sri Lanka</p>
                        </div>

                    </div>
                           </div>
                        ))
                      }
                      
                    </Slider>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Block3
