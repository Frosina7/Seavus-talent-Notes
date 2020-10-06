import React, { Component } from "react";
import "./create.css";
import axios from "axios";
import { Link } from "react-router-dom";

class CreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      titleError: "",
      contentError: "",
      tags: [],
    };

    this.addNote = this.addNote.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/tags`).then((res) => {
      console.log(res);
      this.setState({ tags: res.data });
    });
  }

  titleHandler = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      this.setState({ titleError: "Please fill out this field." });

      this.setState({ title: value });
    } else {
      this.setState({ title: value });

      this.setState({ titleError: "" });
    }
  };

  contentHandler = (e) => {
    const value = e.target.value;

    if (value.length === 0) {
      this.setState({ contentError: "Please fill out this field." });

      this.setState({ content: value });
    } else {
      this.setState({ content: value });

      this.setState({ contentError: "" });
    }
  };

  addNote(e) {
    e.preventDefault();
    const newTitle = this.state.title;
    const newContent = this.state.content;

    if (newTitle !== "" && newContent !== "") {
      this.setState({
        title: newTitle,
        content: newContent,
      });

      return this.newNote(newTitle, newContent);
    }
  }

  newNote = (title, content) => {
    axios
      .post(`/api/notes`, { title, content })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='note-create-form'>
        <div className='container'>
          <form onSubmit={this.addNote}>
            <div className='form-group' id='form-group1'>
              <input
                type='text'
                name='title'
                className='form-control'
                placeholder='Enter title...'
                onChange={this.titleHandler}
                value={this.state.title}
              ></input>

              <p>{this.state.titleError}</p>

              <textarea
                name='content'
                className='form-control '
                placeholder='Type here...'
                rows='7'
                id='content-textarea'
                onChange={this.contentHandler}
                value={this.state.content}
              ></textarea>
              <p>{this.state.titleError}</p>
            </div>
            <div className='form-group' id='select-form'>
              <select className='form-control' id='sel1'>
                {this.state.tags.map((tag, index) => (
                  <option key={index}>#{tag.name}</option>
                ))}
              </select>

              <button type='button' className='btn btn'>
                Add
              </button>
            </div>
            <div className='container' id='bottom-container'>
              <button
                className='btn btn'
                id='save-button'
                type='submit'
                onClick={() => (window.location.href = "/")}
                disabled={
                  this.state.titleError !== "" || this.state.contentError !== ""
                }
              >
                Save
              </button>

              <button
                type='button'
                className='btn btn'
                id='cancel-button'
                onClick={() =>
                  window.location.reload(false) && <Link to='/create-note' />
                }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateForm;
