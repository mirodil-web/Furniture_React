import React from 'react'

const Hero = () => {
    return (
        <div className='py-36 bg-no-repeat foiz bg-herobg font-montserrat ' >
            <div className="container">
                <div className='bg-herodiv p-10 max-w-herodivwidth rounded-lg ml-auto'>
                    <h3 className='text-base font-semibold tracking-widest text-gblack mb-5'>New Arrival</h3>
                    <h2 className='text-darkblue text-[52px] mb-5 font-bold leading-[64px]'>Discover Our <br /> New Collection</h2>
                    <p className='text-lg font-medium leading-10 mb-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <a href="#" className='inline-block bg-darkblue text-white py-6 px-[72px] rounded-full'>BUY NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Hero