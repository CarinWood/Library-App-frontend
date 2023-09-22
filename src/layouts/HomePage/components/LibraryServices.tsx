import React from 'react'
import tea from '../../../Images/tea.jpg'

export const LibraryServices = () => {
  return (
    <div className='hidden md:flex w-full h-[80vh] justify-center items-start
     bg-violet-100 pt-8'>

    <div className='w-[320px] md:w-[70%] h-[50vh] md:shadow-2xl rounded-lg 
    flex flex-col items-start justify-start pt-8 md:pl-8 relative'
    >
        <h1 className='text-3xl font-bold w-[400px]'>Can't find what you are looking for?</h1>
        <p className='text-lg w-[320px] md:w-[400px] mt-8'>If you cannot find what you are looking for, send our library admin a personal message!</p>
        <button className='text-xl bg-indigo-700 text-white 
            rounded-xl shadow-lg py-3 px-4 mt-8'>
                Sign up
        </button>
        
        <img src={tea} alt="tea and books" 
        className='hidden md:block w-[400px] h-[280px] object-cover 
        absolute right-[3%] top-[50%] mt-[-140px] rounded-lg'
         />
    </div>
        

    </div>
  )
}
