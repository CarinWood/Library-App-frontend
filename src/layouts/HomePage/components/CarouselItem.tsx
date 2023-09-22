import React, { FC } from 'react'
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import BookModel from '../../../models/BookModel';



const CarouselItem:FC<{book: BookModel}> = (props) => {
  return (
   
        <SplideSlide className="carousel-slide">
              <img src={props.book.img} alt="book 2" className='book'/>
              <p className='mb-[-10px] mt-3'>{props.book.title}</p>
              <button className='bg-indigo-700 text-white
              px-4 py-2 rounded-lg mt-8'
              >
                  Reserve
              </button>
        </SplideSlide>


  )
}

export default CarouselItem