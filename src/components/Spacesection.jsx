import React from 'react'
import Indexlink from './Indexlink'

const Spacesection = () => {
    return (
        <section className='bg-herodiv py-14 font-montserrat'>
            <div className="container flex justify-between items-center">

                <div className='max-w-lg'>
                    <h2 className='text-3xl font-bold text-gblack mb-5'>Beautify Your Space</h2>
                    <p className='text-xl font-normal leading-10 mb-7'>
                        Do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                 <Indexlink />
                </div>

                <img width={500} className='bg-herodiv' height={754} src="../../public/assets/Mask.jpg" alt="Odam" />

            </div>
        </section>
    )
}

export default Spacesection