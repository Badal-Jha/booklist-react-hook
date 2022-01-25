import React, { createContext, useState } from "react";
import { v1 as uuid } from "uuid";
export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Do not blame!", author: "Badal Jha", id: 1 },
    { title: "Blockchain the future!", author: "Amrit", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, authorid: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
