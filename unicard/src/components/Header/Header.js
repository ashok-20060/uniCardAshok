import React from "react";
import "./header.css";

const Header = () => {
  const handleClick = () => console.log("redirect ");
  return (
    <div className="header">
      <div className="headerTitle">
        uni<sup>.</sup>
      </div>
      <div className="uniPaychek" onClick={handleClick}>
        Uni Paychek
      </div>
    </div>
  );
};

export default Header;
