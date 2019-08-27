import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "Book 1", id: 1 },
    { title: "Book 2", id: 2 }
  ]);
  const addBook = title => {
    console.log("Hooo");
  };
  return (
    <BookContext.Provider value={{ books, addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
