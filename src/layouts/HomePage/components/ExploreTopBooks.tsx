import React from 'react'

const ExploreTopBooks = () => {
  return (
    <div id="hero" className='relative'>
        <div id="herotext" className='w-[300px] ml-[-150px] absolute z-10 md:w-[500px] bg-transparent
         text-white flex flex-col justify-center items-start 
         left-[50%] md:ml-[-180px] top-[15%]'>
            <h1 className='font-bold text-3xl mb-2'>
                Find your next adventure
            </h1>
            <p className='mb-2'>Where would you like to go next?</p>
            <button className='bg-indigo-700 text-white 
            rounded-xl shadow-lg py-3 px-4 mt-6'>
                Explore books
            </button>
        </div>
        <div className='absolute top-0 w-full h-[70vh] bg-black opacity-70 z-6'></div>

    </div>
  )
}

export default ExploreTopBooks