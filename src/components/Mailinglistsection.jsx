import React from 'react'

const Mailinglistsection = () => {
    return (

        <section className='bg-herodiv py-14 font-montserrat'>
            <div className='container text-center'>
                <h2 className='text-3xl mb-2.5 font-bold'>Join Our Mailing List</h2>
                <p className='mx-auto text-xl font-normal leading-10 mb-12 max-w-lg'>Sign up to receive inspiration, product updates, and special offers from our team.</p>
                <div className='border-darkblue border  bg-white max-w-[486px] rounded-md mx-auto flex justify-between'> 
                    <input className='p-6 rounded-md shrink flex ' type="email" placeholder='exsample@gmail.com' />
                    <button type='submit' className=' rounded-sm text-white bg-darkblue px-11 pt-[27px] pb-[26px] font-bold'>Submit</button>
                </div>
            </div>

        </section>
    )
}

export default Mailinglistsection