import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./note_create_style.css";
import { Link } from "react-router-dom";

function CreateNote(props) {
  return (
    <div className='note-create'>
      <Link to='/create-note'>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Link>
    </div>
  );
}

export default CreateNote;
