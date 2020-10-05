import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./create_icon.css";
import { Link } from "react-router-dom";

function CreateNote(props) {
  return (
    <div className='note-create'>
      <Fab aria-label='add'>
        <Link to='/create-note'>
          <AddIcon />
        </Link>
      </Fab>
    </div>
  );
}

export default CreateNote;
