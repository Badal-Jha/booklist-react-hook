import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetail = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return <li onClick={() => removeBook(book.id)}>{book.title}</li>;
};

export default BookDetail;
