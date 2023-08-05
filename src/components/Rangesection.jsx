import React from 'react'

const Rangesection = () => {
    return (
        <div className='container border-b'>
            <section className='py-14 font-montserrat'>
                <div className='text-center mb-12'>
                    <h2 className='text-4xl font-bold mb-5'>Browse The Range</h2>
                    <p className='mb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className='flex justify-between'>
                        <div>
                            <img className='mb-8' src="../../public/assets/Dining.jpg" alt="Home" />
                            <h4 className='text-2xl font-semibold text-gblack'>Dining</h4>
                        </div>
                        <div>
                            <img className='mb-8' src="../../public/assets/Image-living.jpg" alt="Home" />
                            <h4 className='text-2xl font-semibold text-gblack'>Living</h4>
                        </div>
                        <div>
                            <img className='mb-8' src="../../public/assets/Beadroom.jpg" alt="Home" />
                            <h4 className='text-2xl font-semibold text-gblack'>Living</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Rangesection