import React from 'react'

const Footer = () => {
  return (
      <footer className='bg-darkblue py-12 font-montserrat'>
          <div className="container flex justify-between items-center">
              
              <div className='max-w-[400px]'>
                  <h2 className='text-white font-bold text-2xl mb-8'>Beauty Care</h2>
                  <p className='font-normal  leading-9 text-white mb-5'>Do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                  <h3 className='text-white font-bold text-2xl '>Follow Us</h3>
              </div>

              <div>
                  <h3 className='text-white font-bold text-2xl mb-6'>Instagram Shop</h3>
                  <div className='flex space-x-5'>
                      <img className='rounded-sm' width={175} height={185} src="../../public/assets/IG-1.jpg" alt="img" />
                      <img className='rounded-sm' width={175} height={185} src="../../public/assets/IG-2.jpg" alt="img" />
                      <img className='rounded-sm' width={175} height={185} src="../../public/assets/IG-3.jpg" alt="img" />
                      <img className='rounded-sm' width={175} height={185} src="../../public/assets/IG-4.jpg" alt="img" />

                  </div>
              </div>

          </div>
    </footer>
  )
}

export default Footer