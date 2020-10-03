import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import "./note_create_style.css";

function CreateNote(props) {
  return (
    <div className='note-create'>
      <Fab color='primary' aria-label='add'>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default CreateNote;
