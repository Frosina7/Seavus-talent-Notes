import React, { Component } from "react";
import "./tag_style.css";
import { Box } from "@material-ui/core";

class TagsManager extends Component {
  render() {
    return (
      <div className='tag-create-form'>
        <form onSubmit={this.handleForm}>
          <div className='form-group' id='create-tag'>
            <Box m={3} p={2} className='tag-create-box'>
              <input
                type='text'
                name='tag'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Create new tag'
                onChange={this.handleTitleChange}
              ></input>
              <button type='button' className='btn btn'>
                Create
              </button>
            </Box>
          </div>
        </form>
      </div>
    );
  }
}

export default TagsManager;
