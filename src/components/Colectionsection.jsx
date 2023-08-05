import React from 'react'

const Colectionsection = () => {
  return (
    <div className='container'>
      <section className='py-14 font-montserrat'>

        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-5'>Inspiration Collection</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className='flex justify-between p-1'>
          <img className='pt-10' src="../../public/assets/flowers.jpg" alt="Card img" />
          <img className='pb-10' src="../../public/assets//furniture.jpg" alt="Card img" />
          <img className='pt-10' src="../../public/assets/./lamp.jpg" alt="Card img" />
        </div>

      </section>
    </div>
  )
}

export default Colectionsection