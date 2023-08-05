import React from 'react'

const Header = () => {
    return (
        <div className='container'>
            <header className='py-10 flex items-center justify-between'>

                <a href="index.html">
                    <h1 className='text-darkblue font-bold text-4xl  font-montserrat'>  Furniture </h1>
                </a>

                <nav>
                    <ul className='flex items-center space-x-16'>

                        <li>
                            <a href="#" className='no-underline text-gblack text-sm font-montserrat font-semibold'>Home</a>
                        </li>

                        <li>
                            <a href="#" className='no-underline text-gblack text-sm font-montserrat font-semibold'>Services</a>
                        </li>

                        <li>
                            <a href="#" className='no-underline text-gblack text-sm font-montserrat font-semibold'>Doctors</a>
                        </li>

                        <li>
                            <a href="#" className='no-underline text-gblack text-sm font-montserrat font-semibold'>Products</a>
                        </li>

                        <li>
                            <a href="#" className='no-underline text-gblack text-sm font-montserrat font-semibold'>Gallery</a>
                        </li>

                    </ul>
                </nav>

            </header>
        </div>
    )
}

export default Header