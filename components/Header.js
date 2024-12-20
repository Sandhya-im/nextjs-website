import React from 'react'
import Image from "next/image";
import logo from '../Assets/logo.jpg'

const Header = () => {
  return (
    <div>
      <div className='grid grid-cols-12 bg-white'>
       <div className='col-span-4 flex justify-end'>
          <Image src={logo} width={80} height={50} alt=''/>
       </div>
      </div>
    </div>
  )
}

export default Header