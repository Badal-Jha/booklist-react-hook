import React, { createContext, useState, useReducer, useEffect } from "react";
import { stringify, v1 as uuid } from "uuid";
import { bookReducer } from "../reducers/bookReducers";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: "Do not blame!", author: "Badal Jha", id: 1 },
  //   { title: "Blockchain the future!", author: "Amrit", id: 2 },
  // ]);
  //using reducer we can put all the functions together in reducer funtion
  //usereducer hook take two argument a reducer function and initial state
  //and return two value state and a dispatch function
  //we can also give a function to get the initial state and can use default state
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  //use localstorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  //we are using use reducer hook so we dont have to use it
  // const addBook = (title, author) => {
  //   setBooks([...books, { title, author, id: uuid() }]);
  // };
  // const removeBook = (id) => {
  //   setBooks(books.filter((book) => book.id !== id));
  // };

  return (
    // <BookContext.Provider value={{ books, addBook, removeBook }}>
    //   {props.children}
    // </BookContext.Provider>
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
