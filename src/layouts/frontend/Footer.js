import React from 'react'

function Footer() {
  return (
    <div className='hidden  w-full rounded-t-3xl shadow-xl shadow-[#fff] bg-[#17191B] md:flex flex-col justify-center items-center pt-8'>
        <div className='flex justify-between w-11/12'>
            <div className='w-[40%]'>
                <h1 className='font-bold text-lg text-[#fff]'>ABOUT WIN4PESA</h1>
                <p className='text-sm text-gray-400 text-start'>Win4Pesa was established in 2020 and operated under a Curacao gaming license with more than 2 million users. Win4pesa is one of Asia's most trusted and leading online casinos and sports betting platforms. Win4Pesa offers a wide selection of slot games, live casinos, lotteries, sports exchanges, and e-casino. Members who sign up will receive Bonus and have a chance to win exciting prizes .</p>
            </div>
            <div className=''>
                <h1 className='font-bold text-base text-[#fff]'>QUICK LINK</h1>
                <ul className='text-sm text-gray-400 text-start'>
                    <ol>About Us</ol>
                    <ol>Loyalty</ol>
                    <ol>Affiliate</ol>
                </ul>
            </div>
            <div className=''>
                <h1 className='font-bold text-base text-[#fff]'>COMPANY POLICY</h1>
                <ul className='text-sm text-gray-400 text-start'>
                    <ol>Licences Info</ol>
                    <ol>Rule for bit</ol>
                    <ol>Terms of Service</ol>
                    <ol>Privacy Policy</ol>
                    <ol>Disconnection Policy</ol>
                    <ol>Responsible Gambling</ol>
                </ul>
            </div>
        </div>
        <div className='flex justify-between w-11/12 mt-5'>
            <div>
                <h1 className='font-bold text-lg text-[#fff]'>LICENSES</h1>
                <img src='http://www.matic247.com/assets/images/frontend/licenses/64b65bb6558181689672630.png' alt='footer_img' />
            </div>
            <div>
                <h1 className='font-bold text-lg text-[#fff]'>FOLLOW US:</h1>
                <div className='flex gap-2 cursor-pointer'>
                    <img src='http://www.matic247.com/assets/images/frontend/follow_us/64b65b96630771689672598.png' alt='footer_img' />
                    <img src='http://www.matic247.com/assets/images/frontend/follow_us/64b6d37eb98831689703294.png' alt='footer_img' />
                    <img src='http://www.matic247.com/assets/images/frontend/follow_us/64b975c85dbcb1689875912.png' alt='footer_img' />
                    <img src='http://www.matic247.com/assets/images/frontend/follow_us/64b975da9b11b1689875930.png' alt='footer_img' />            </div>
                </div>
            <div>
            <div>
                <h1 className='font-bold text-lg text-[#fff]'>PAYMENT METHODS</h1>
                <div className='flex gap-1 bg-[#222222] p-2 rounded-lg cursor-pointer'>
                    <img src='http://www.matic247.com/assets/images/frontend/payment_methods/64b65bd33dd241689672659.png' alt='footer_payment_icon'/>
                    <img src='http://www.matic247.com/assets/images/frontend/payment_methods/64b974df0d9221689875679.png' alt='footer_payment_icon'/>
                    <img src='http://www.matic247.com/assets/images/frontend/payment_methods/64b974ed9eddc1689875693.png' alt='footer_payment_icon'/>
                    <img src='http://www.matic247.com/assets/images/frontend/payment_methods/64b974fd71f431689875709.jpg' alt='footer_payment_icon'/>
                    <img src='http://www.matic247.com/assets/images/frontend/payment_methods/64b9750c6fdad1689875724.png' alt='footer_payment_icon'/>
                </div>
            </div>
                
            </div>
        </div>
        <div className='w-full rounded-t-3xl  bg-[#222222] flex justify-center items-center py-4 text-[#fff]'>
        All Rights Reserved By
        </div>
      
    </div>
  )
}

export default Footer
