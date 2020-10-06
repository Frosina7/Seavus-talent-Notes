import React, { Component } from "react";
import "./tag_style.css";
import axios from "axios";
import { Box } from "@material-ui/core";

class TagsManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    axios.get(`/api/tags`).then((res) => {
      console.log(res);
      this.setState({ tags: res.data });
    });
  }

  deleteTag = () => {
    axios.delete(`api/tags/${this.props.id}`);
    window.location.reload(true);
  };

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
            <div className='container' id='tags-container'>
              {this.state.tags.map((tag, index) => (
                <div className='tag-button-container'>
                  <div
                    type='text'
                    className='form-control'
                    id='form-tags'
                    key={index}
                  >
                    #{tag.name}
                  </div>
                  <div>
                    <button
                      type='button'
                      className='btn btn'
                      onClick={this.deleteTag}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TagsManager;
