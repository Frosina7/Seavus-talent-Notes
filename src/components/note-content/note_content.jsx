import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NoteContent extends Component {
  render() {
    return (
      <div className='note-content'>
        <div className='note-content-title'>{this.props.content}</div>
      </div>
    );
  }
}

NoteContent.propTypes = {
  content: PropTypes.string.isRequired,
};
