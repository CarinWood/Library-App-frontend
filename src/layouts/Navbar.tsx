import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

const Navbar = () => {
    const [menu, openMenu] = useState<boolean>(false)

    const toggleMenu = () => {
      console.log('toggle menu func' + menu)
        openMenu(!menu)
    }

  return (
    <>
    <nav 
      className="h-[9vh] w-full md:h-[11vh] bg-black 
      flex justify-between items-center px-8 relative"
      id="nav"
    >

    <div className='flex justify-start items-center'>
          <p className='font-semibold text-2xl mr-[60px] mb-1'>Library app</p>
          <ul className='hidden md:flex md:justify-center md: items-center'>
            <li className='mx-3'>
              <a href="#">Home</a>
            </li>
            <li className='mx-3'>
              <a href="#">Search Books</a>
            </li>
          </ul>
      </div>

      <button className='hidden md:flex items-center justify-center border rounded-lg px-3 py-1'>Sign in</button>
      
      <div 
        className='md:hidden text-2xl cursor-pointer'
        onClick={toggleMenu}
      >
            <FiMenu/> 
      </div>  
  </nav>
  <div 
    className='w-full absolute z-10 bg-black 
     md:hidden text-white'
    id={menu ? 'open' : 'close'}
    >
    <div className='w-full py-6 text-lg pl-8 hover:opacity-30 relative cursor-pointer'>
        <p id={menu ? "active": "inactive"}>Home</p>
    </div>
    <div className='w-full py-6 text-lg pl-8 hover:opacity-30 relative cursor-pointer'>
        <p id={menu ? "active": "inactive"}>Search</p>
    </div>
    <div className='w-full py-6 text-lg pl-8 hover:opacity-30 relative cursor-pointer'>
        <p id={menu ? "active": "inactive"}>Sign in</p>
    </div>
  
</div> 
  </>
  )
}

export default Navbar