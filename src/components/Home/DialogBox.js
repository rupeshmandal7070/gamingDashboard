import React from 'react';

const DialogBox = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="fixed inset-0 bg-[#000]   opacity-40"></div>
      <div className=" bg-[#2b2d2e] w-full md:w-1/2 h-2/3 md:h-auto overflow-y-auto">
        <div className="relative ">
          <button
            onClick={onClose}
            className="absolute top-2 right-2     cursor-pointer"
          >
            &times;
          </button>
            <div className='overflow-x-auto h-[700px] mt-24 flex'>
                <div className='w-[400px]'>
                    <img src="http://www.matic247.com/assets/images/frontend/login_register/64bae36a1f68b1689969514.jpg" alt=''/>
                </div>
                <div className=' mt-32'>
                    <div>
                        <div className='text-[#fff] text-lg'>Register</div>
                        <div>x</div>
                    </div>
                    <div>Hello</div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
