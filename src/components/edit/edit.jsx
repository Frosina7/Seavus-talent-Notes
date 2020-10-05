import React, { Component } from "react";

import axios from "axios";

class EditNote extends Component {
  state = {
    tags: [],
  };

  componentDidMount() {
    axios.get(`/api/tags`).then((res) => {
      console.log(res);
      this.setState({ tags: res.data });
    });
  }

  handleForm = (event) => {
    event.preventDefault();
    axios.post(`/api/notes`, this.state.title, this.state.content);
  };

  handleTitleChange = (event) => {
    const title = event.target.value;
    this.setState({ title: title });
  };
  handleContentChange = (event) => {
    const content = event.target.value;
    this.setState({ content: content });
  };

  render() {
    return (
      <div className='note-create-form'>
        <div className='container'>
          <form onSubmit={this.handleForm}>
            <div className='form-group' id='form-group1'>
              <input
                type='text'
                name='title'
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Enter title...'
                onChange={this.handleTitleChange}
              ></input>
            </div>

            <div className='form-group'>
              <textarea
                className='form-control'
                name='content'
                placeholder='Type here...'
                rows='7'
                onChange={this.handleContentChange}
              ></textarea>
            </div>
            <div className='form-group' id='select-form'>
              <select className='form-control' id='sel1'>
                <option>
                  {this.state.tags.map((tag, index) => (
                    <span key={index}>#{tag.name}</span>
                  ))}
                </option>
                {console.log(
                  "tags",
                  this.state.tags.map((tag, index) => (
                    <span key={index}>#{tag.name}</span>
                  ))
                )}
              </select>

              <button type='button' className='btn btn'>
                Add
              </button>
            </div>
            <div classNameName='container' id='bottom-container'>
              <button type='button' classNameName='btn btn' id='save-button'>
                Save
              </button>
              <button type='button' classNameName='btn btn' id='cancel-button'>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditNote;
