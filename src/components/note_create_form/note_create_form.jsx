import React, { Component } from "react";
import "./note_create_form_style.css";

function CreateNoteForm() {
  return (
    <div className='note-create-form'>
      <div className='container'>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              id='exampleFormControlInput1'
              placeholder='Enter title...'
            ></input>
          </div>

          <div class='form-group'>
            <textarea
              className='form-control'
              placeholder='Type here...'
              rows='7'
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNoteForm;
