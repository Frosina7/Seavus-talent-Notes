import React, { Component } from "react";
import "./tag_style.css";
import axios from "axios";
import { Box } from "@material-ui/core";

class TagsManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tags: [],
    };
    this.addTag = this.addTag.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/tags`).then((res) => {
      console.log(res);
      this.setState({ tags: res.data });
    });
  }

  tagHandler = (e) => {
    const value = e.target.value;
    this.setState({ tag: value });
  };

  addTag(e) {
    e.preventDefault();
    const newTag = this.state.tag;

    if (newTag !== "") {
      this.setState({
        tag: newTag,
      });

      return this.newTag(newTag);
    }
  }

  newTag = (name) => {
    axios
      .post(`/api/tags`, { name })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='tag-create-form'>
        <form>
          <div className='form-group' id='create-tag'>
            <Box m={3} p={2} className='tag-create-box'>
              <input
                type='text'
                name='name'
                value={this.state.tag}
                className='form-control'
                id='exampleFormControlInput1'
                placeholder='Create new tag'
                onChange={this.tagHandler}
              ></input>
              <button type='button' className='btn btn' onClick={this.addTag}>
                Create
              </button>
            </Box>
            <div className='container' id='tags-container'>
              {this.state.tags.map((tag, index) => (
                <div className='tag-button-container' key={index}>
                  <div
                    type='text'
                    className='form-control'
                    id='form-tags'
                    value={tag.id}
                    key={index}
                  >
                    #{tag.name}
                  </div>
                  <div>
                    <button type='button' className='btn btn'>
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
