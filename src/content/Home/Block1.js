// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

//Block1
import {GiBackwardTime} from "react-icons/gi"
import {TbSquareRoundedLetterH} from "react-icons/tb"
import {AiOutlineHeart} from "react-icons/ai"
import {SlEarphones} from "react-icons/sl"
import {FiGrid,FiHome} from "react-icons/fi"
import Glider from 'glider-js';
import 'glider-js/glider.min.css';
import ButtonsGlider from "@/src/components/Home/ButtonsGlider"


const NavigateButtonData =[
  {
    id:1,
    name:"Home",
    icons:<FiHome/>,
    Route:"/"
  },
  {
    id:2,
    name:"Sports",
    icons:<GiBackwardTime/>,
    Route:"/Sports"
  },
  {
    id:1,
    name:"Casino",
    icons:<TbSquareRoundedLetterH/>,
    Route:"/Casino"
  },
  {
    id:1,
    name:"Table",
    icons:<AiOutlineHeart/>,
    Route:"/Table"
  },
  {
    id:1,
    name:"Slot",
    icons:<FiGrid/>,
    Route:"/Slot"
  },
  {
    id:1,
    name:"Promotions",
    icons:<SlEarphones/>,
    Route:"/Promotions"
  }

]

export default function Block1() {
  return (
     <>
      <div className='w-full flex justify-center'>
        <div className='border-[#fff] bg-[#0D1D29] h-24 flex justify-start text-start items-center w-[97%] rounded-3xl  gap-3'>
            <ButtonsGlider data ={NavigateButtonData} />
            {/* {
              NavigateButtonData.map((tab)=>(
                <>
                  <div className={`hover:bg-[#987712] text-[#fff]  bg-[#2F4553] py-3 px-7  rounded-full  text-center flex items-center gap-2 font-semibold text-lg
                  ${tab.Route === "/" ? "bg-[#987712]" : "bg-[#2F4553]"} `}>
                    {tab.icons} {tab.name}
                  </div>
                </>
              ))
            } */}
        </div>
      </div>
     </>
  )
}
