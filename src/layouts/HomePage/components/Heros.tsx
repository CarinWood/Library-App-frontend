import React from 'react'
import pile from '../../../Images/PublicImages/bookpile.png'

export const Heros = () => {
  return (
    <div className='w-full h-[100vh] bg-violet-100 flex flex-col md:flex-row justify-start md:justify-center items-center border border-blue'>

        <img src={pile} alt="book and tea" 
        className='w-[160px] object-cover rounded-lg
        md:mr-[50px]'
        />
           
           
        <div className='w-[320px] mt-8 md:mt-0 md:w-[450px] bg-violet-100 text-black md:ml-[50px]'>
            <h1 className='font-bold text-3xl mb-5'>What have you been reading?</h1>
            <p className='text-xl'>The Library team would love to know what you have been reading.
            Whether it is fantasy or horror, we would like to provide top content for you! </p>
            <button className='text-xl bg-indigo-700 text-white 
            rounded-xl shadow-lg py-3 px-4 mt-8'>
                Sign up
            </button>
        </div>

    


    </div>
  )
}
