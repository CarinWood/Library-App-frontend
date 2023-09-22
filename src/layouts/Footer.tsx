import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full h-[15vh] flex flex-col justify-center items-center text-white'>
        <p className='text-lg mb-3'>&copy;Copyright 2023 </p>
        <p className='text-lg'>
            Created and built by 
            <a href="https://carinwood-eng-cv.netlify.app/"
            className='underline ml-[5px]'
            >Carin Wood</a>
        </p>

    </div>
  ) 
}
