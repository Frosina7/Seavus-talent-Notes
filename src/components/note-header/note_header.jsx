import React, { Component } from "react";
import PropTypes from "prop-types";
import ClearIcon from "@material-ui/icons/Clear";

export default class NoteHeader extends Component {
  render() {
    return (
      <div className='note-header'>
        <div className='note-header-title'>{this.props.title}</div>
        <div>
          <ClearIcon />
        </div>
      </div>
    );
  }
}
NoteHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
