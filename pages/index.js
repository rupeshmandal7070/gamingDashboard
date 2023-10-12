// import { Inter } from 'next/font/google'
import Footer from '@/src/layouts/frontend/Footer'
import Block1 from '../src/content/Home/Block1'
import Block2 from '../src/content/Home/Block2'
import Block3 from '../src/content/Home/Block3'
import Block4 from '@/src/content/Home/Block4'
import Block5 from '@/src/content/Home/Block5'
import Nav from '@/src/layouts/frontend/Nav'
// const inter = Inter({ subsets: ['latin'] })

 


 
export default function Home() {
  return (
     <>
     <div className='bg-[#1A1C20] w-full '>
         <Nav/>
        <Block1/>
        <Block2/>
        <Block3/>
        <Block4/>
        {/* <Block5/> */}
        {/* <Footer/> */}
        
     </div>
     </>
  )
}
