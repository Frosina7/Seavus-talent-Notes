import React from "react";
import "./header_style.css";

function Header(props) {
  return (
    <div className='header'>
      <header className='header-title'>{props.title}</header>
    </div>
  );
}

export default Header;
