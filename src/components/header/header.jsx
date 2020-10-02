import React from "react";
import "./header_style.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./header_style.css";

function Header(props) {
  return (
    <div className='header'>
      <AppBar position='static'>
        <Toolbar className='toolbar'>
          <Typography variant='h6' className='seavus-title'>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
