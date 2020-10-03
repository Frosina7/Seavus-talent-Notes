import React from "react";
import "./header_style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./header_style.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className='header'>
      <AppBar position='static'>
        <Toolbar className='toolbar'>
          <Typography variant='h6' className='seavus-title'>
            {props.title}
          </Typography>
          <Link to='/manage-tags'>
            <button className='toolbar-button'>{props.action}</button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
