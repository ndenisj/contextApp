import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The kings</li>
        <li style={{ background: theme.ui }}>Who we are</li>
        <li style={{ background: theme.ui }}>It's not over</li>
      </ul>
    </div>
  );
};

export default BookList;
