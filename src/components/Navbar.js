import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Badal Jha Book list</h1>
      <p>You have currently {books.length} books to read...</p>
    </div>
  );
};

export default Navbar;
