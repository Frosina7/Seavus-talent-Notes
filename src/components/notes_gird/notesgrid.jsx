import React, { Component } from "react";
import axios from "axios";
import Note from "../note/note";
import Box from "@material-ui/core/Box";
import "./note_style.css";

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

  render() {
    return (
      <div>
        <div className='d-flex flex-row'>
          <div className='note-grid'>
            <div className='row justify-content-md-left'>
              {this.state.notes.map((notes) => (
                <Box m={3}>
                  <div className='note'>
                    <div className='note-header'>{notes.title}</div>
                    <div className='note-content'>{notes.content}</div>
                    <div className='note-footer'>
                      {notes.tags.map((tag) => (
                        <p>#{tag.name}</p>
                      ))}
                    </div>
                    {console.log(
                      "tags",
                      notes.tags.map((tag) => <p>#{tag.name}</p>)
                    )}
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
