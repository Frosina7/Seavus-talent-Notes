import React, { Component } from "react";
import PropTypes from "prop-types";
import "./note_style.css";
import NoteHeader from "../note-header/note_header";
import NoteContent from "../note-content/note_content";
import NoteFooter from "../note-footer/note_footer";

export default class Note extends Component {
  render() {
    return (
      <div className='note'>
        <NoteHeader title={this.props.title} />
        <NoteContent content={this.props.content} />
        <NoteFooter tags={this.props.tags} />
      </div>
    );
  }
}
Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};
