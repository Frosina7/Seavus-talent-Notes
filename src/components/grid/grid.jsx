import React, { Component } from "react";
import axios from "axios";
import Note from "../note/note";
import Box from "@material-ui/core/Box";
import "./grid.css";

export default class NotesGrid extends Component {
  state = {
    notes: [],
  };

  componentDidMount() {
    axios.get(`/api/notes`).then((res) => {
      console.log(res);
      this.setState({ notes: res.data });
    });
  }

  removeOnClick = (note, index) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      let notes = [...this.state.notes];
      notes.splice(index, 1);
      this.setState({ notes: notes });
    }
  };

  render() {
    return (
      <div>
        <div className='d-flex flex-row'>
          <div className='note-grid'>
            <div className='row justify-content-md-left' id='row'>
              {this.state.notes.map((note, index) => (
                <Box m={3} key={index}>
                  <div className='note'>
                    <Note
                      title={note.title}
                      content={note.content}
                      tags={note.tags.map((tag, index) => (
                        <span key={index}>#{tag.name}</span>
                      ))}
                      onClick={this.removeOnClick}
                    ></Note>
                  </div>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
