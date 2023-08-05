import React from 'react'

const Herobottomdiv = () => {
  return (
      <div className='bg-herodiv font-montserrat py-10 '>
          <div className="container flex items-center justify-between">
              
              {/* 1 */}
              <div className='flex'>
                  <img className='mr-5' src="../../public/assets/cardx.png" alt="car" />
                  <div>
                      <h3 className='text-2xl font-semibold'>Free Delivery</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>

              {/* 2 */}
              <div className='flex'>
                  <img className='mr-5' src="../../public/assets/aylan.svg" alt="car" />
                  <div>
                      <h3 className='text-2xl font-semibold'>Free Delivery</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>

              {/* 3 */}
              <div className='flex'>
                  <img className='mr-5' src="../../public/assets/shield.svg" alt="car" />
                  <div>
                      <h3 className='text-2xl font-semibold'>Free Delivery</h3>
                      <p>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>

          </div>
    </div>
  )
}

export default Herobottomdiv