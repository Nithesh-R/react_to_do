import React from "react";

const Header = ({ title }) => {
  //   const headerStyle = { backgroundColor: "black", color: "white" };
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};
Header.defaultProps = {
  title: "To do list",
};
export default Header;
