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
      name: "",
      tags: [],
      selectedTags: [],
      currentTag: "",
    };

    this.addNote = this.addNote.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/tags`).then((res) => {
      console.log(res);
      this.setState({ tags: res.data });
    });
  }

  componentDidUpdate() {
    console.log("State", this.state);
    if (this.state.currentTag !== this.state.tags[0].name) {
      this.setState({
        currentTag: this.state.tags[0].name,
      });
    }
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

  selectedTagsHandler = (e) => {
    //i know this is now the right way,I did it this way because it worked for my scenario
    this.state.currentTag = e.target.value;
  };

  handleAddButton = () => {
    this.addTag(this.state.currentTag);
  };

  addTag = (tag) => {
    this.state.selectedTags.push(tag);
    this.setState({
      currentTag: "",
    });
  };

  addNote(e) {
    e.preventDefault();
    const newTitle = this.state.title;
    const newContent = this.state.content;
    const newTags = this.state.selectedTags;

    if (newTitle !== "" && newContent !== "") {
      this.setState({
        title: newTitle,
        content: newContent,
        selectedTags: newTags,
      });

      return this.newNote(newTitle, newContent, newTags);
    }
  }

  newNote = (title, content, newTags) => {
    axios
      .post(`/api/notes`, { title, content, newTags })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    debugger;
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
              <select
                className='form-control'
                id='sel1'
                onChange={this.selectedTagsHandler}
              >
                {this.state.tags.map((tag, index) => (
                  <option key={index} name='name' value={tag.name}>
                    #{tag.name}
                  </option>
                ))}
              </select>

              <button
                type='button'
                className='btn btn'
                onClick={this.handleAddButton}
              >
                Add
              </button>

              <div className='container'>
                {this.state.selectedTags.map((tag, index) => (
                  <span key={index} name='name' value={tag}>
                    #{tag}
                  </span>
                ))}
              </div>
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
