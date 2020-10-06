import React, { Component } from "react";
import PropTypes from "prop-types";
import ClearIcon from "@material-ui/icons/Clear";
import { Box } from "@material-ui/core";
import axios from "axios";

export default class NoteHeader extends Component {
  constructor(props) {
    super(props);
  }

  deleteNote = () => {
    axios.delete(`api/notes/${this.props.id}`);
    window.location.reload(false);
  };

  render() {
    return (
      <div className='note-header'>
        <div className='note-header-title'>{this.props.title}</div>
        <Box onClick={this.deleteNote}>
          <ClearIcon />
        </Box>
      </div>
    );
  }
}
NoteHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
