import React from 'react'

const Worksection = () => {
  return (
      <div className='container'>
          <section  className='py-14 pb-40 text-center font-montserrat'>
              <h2 className='text-4xl font-bold mb-5'>How It Works</h2>
              <p className='mb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 
              <div className='flex justify-between '>
                  <div className='text-center max-w-sm relative '>
                      <img width={381} className='mb-16' height={400} src="../../public/assets/man.png" alt="Image" />

                      <div className=' bg-white p-5 absolute bottom-28 left-36
                       py-8 z-10 rounded-full'>
                          <span className='bg-black rounded-full p-4 text-white px-5'> 1.</span>
                      </div>
                     
                      <h3 className='font-bold text-2xl mb-2.5'>Purchase Securely</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>

                  {/* 2 */}
                  <div className='text-center max-w-sm relative '>
                      <img width={381} className='mb-16' height={400} src="../../public/assets/bighomeimg.png" alt="Image" />

                      <div className=' bg-white p-5 absolute bottom-28 left-36
                       py-8 z-10 rounded-full'>
                          <span className='bg-black rounded-full p-4 text-white px-5'> 2.</span>
                      </div>

                      <h3 className='font-bold text-2xl mb-2.5'>Ships From Warehouse</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>

                  {/*  */}
                  <div className='text-center max-w-sm relative '>
                      <img width={381} className='mb-16' height={400} src="../../public/assets/flowerstwo.png" alt="Image" />

                      <div className=' bg-white p-5 absolute bottom-28 left-36
                       py-8 z-10 rounded-full'>
                          <span className='bg-black rounded-full p-4 text-white px-5'> 3.</span>
                      </div>

                      <h3 className='font-bold text-2xl mb-2.5'>Style Your Room</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
              </div>

          </section>
    </div>
  )
}

export default Worksection