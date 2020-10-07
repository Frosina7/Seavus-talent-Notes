import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Note from "../note/note";

export default class FilterTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      notes: [],
    };
  }

  componentDidMount() {
    axios.get(`/api/tags/${this.state.id}/notes`).then((res) => {
      this.setState({ notes: res.data });
    });
  }

  render() {
    return (
      <div className='notes-grid'>
        <div className='notes-grid-cancel'>
          <Link to='/'>
            <button className='btn btn'>Cancel filter</button>
          </Link>
        </div>
        {this.state.notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            id={note.id}
            content={note.content}
            tags={note.tags}
          />
        ))}
      </div>
    );
  }
}
