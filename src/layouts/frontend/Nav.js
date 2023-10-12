import React, { useState } from 'react'
import DialogBox from '@/src/components/Home/DialogBox';
function Nav() {
    const [isDialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
      setDialogOpen(true);
    };
  
    const closeDialog = () => {
      setDialogOpen(false);
    };
  
  return (
    <div className='h-16 md:h-20 bg-[#24262B] rounded-b-[32px] flex justify-center items-center'>
        <div className='flex justify-between w-11/12 items-center'>
            <div>
                <img src='http://www.matic247.com/assets/images/logoIcon/logo.png' alt='image Nav Bar' className=' h-6 md:h-8 lg:h-10 '/>
            </div>
            <div className='flex gap-x-2'>
                    <div className=' text-[#fff] gradientColorPurple py-1 md:mt-0  text-center px-5 md:px-8 lg:px-10 md:py-3 rounded-lg  md:rounded-xl  cursor-pointer text-base font-semibold flex justify-center items-center'>
                        <button className='' onClick={openDialog} sx={{color:'#fff',padding:"0px",margin:"0px"}}>Register</button>
                        <DialogBox isOpen={isDialogOpen} onClose={closeDialog}>
        <h2 className="text-xl font-semibold mb-4">Scrollable Dialog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          eleifend mi vitae ipsum consectetur, sit amet fringilla nisi pretium.
          ...
        </p>
        {/* Add more content here */}
      </DialogBox>
                    </div>
                    <div className='gradientColorPurple py-1 md:mt-0  text-center px-5 md:px-8 lg:px-10 md:py-3 rounded-lg  md:rounded-xl  cursor-pointer text-base font-semibold flex justify-center items-center'>
                        <p className=''>Login</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Nav
