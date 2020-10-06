import React, { Component } from "react";
import axios from "axios";
import Note from "../note/note";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ClearIcon from "@material-ui/icons/Clear";
import "./grid.css";

export default class NotesGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }

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
            <div className='row justify-content-md-left' id='row'>
              {this.state.notes.map((note, index) => (
                <Box m={3} key={index}>
                  <div className='note'>
                    <Note
                      id={note.id}
                      title={note.title}
                      content={note.content}
                      tags={note.tags.map((tag, index) => (
                        <span key={index}>#{tag.name}</span>
                      ))}
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
