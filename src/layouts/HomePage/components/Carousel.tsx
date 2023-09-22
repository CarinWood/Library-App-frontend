import React from "react";
import { Splide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";
import "@splidejs/react-splide/css";
import BookModel from "../../../models/BookModel";

import CarouselItem from "./CarouselItem";
import { SpinnerLoading } from "../../utils/SpinnerLoading";

const Carousel = () => {
  const [books, setBooks] = useState<BookModel[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState(null)

  useEffect(() => {
      const fetchBooks = async () => {
          const baseUrl: string = "http://localhost:8080/api/books";

          const url:string = `${baseUrl}?page=0&size=9`;

          const response = await fetch(url);
          if(!response.ok) {
            throw new Error('Something went wrong!')
          }

          const responseJson = await response.json();

          const responseData = responseJson._embedded.books;

          const loadedBooks: BookModel[] = []

          for(const key in responseData) {
            loadedBooks.push({
              id: responseData[key].id,
              title: responseData[key].title,
              author: responseData[key].author,
              description: responseData[key].description,
              copies: responseData[key].copies,
              copiesAvailable: responseData[key].copiesAvailable,
              category: responseData[key].category,
              img: responseData[key].img
            })
          }

          setBooks(loadedBooks)
          setIsLoading(false)
      }

      fetchBooks().catch((error: any) => {
        setIsLoading(false)
        setHttpError(error.message);
      })
  }, []);

  if(isLoading) {
    return <SpinnerLoading/>
  }

  if(httpError) {
    return (
      <div>
        <p>{httpError}</p>
      </div>
    )
  }


  return (
    <div className="w-full h-[100vh] bg-violet-100 flex flex-col justify-start items-center pt-5">
      <div className="w-[320px] align-middle text-center md:w-full">
        <h3 className="text-3xl font-bold my-14">
          Find your next favourite book
        </h3>
      </div>
      <Splide id="carouselResponsive" options={{ perPage: 1, type: "loop" }}>
        {books.map((book) => {
          return <CarouselItem book={book} key={book.id}/>
        })}
     

      </Splide>

      <Splide id="carousel" options={{ perPage: 3, type: "loop" }}>
        {books.map((book) => {
          return <CarouselItem book={book} key={book.id}/>
        })}
     
      </Splide>
    </div>
  );
};

export default Carousel;
