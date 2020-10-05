import React from "react";
import PropTypes from "prop-types";
import "./note_style.css";
import ClearIcon from "@material-ui/icons/Clear";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

function Note(props) {
  return (
    <div className='note'>
      <NoteHeader title={props.title} />
      <NoteContent content={props.content} />
      <NoteFooter tags={props.tags} />
    </div>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  id: PropTypes.number,
};

function NoteHeader({ title }) {
  return (
    <div className='note-header'>
      <div className='note-header-title'>{title}</div>
      <ClearIcon onClick={onRemove} />
    </div>
  );
}

const onRemove = () => {};

NoteHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

function NoteContent({ content }) {
  return (
    <div className='note-content'>
      <div className='note-content-title'>{content}</div>
    </div>
  );
}

NoteContent.propTypes = {
  content: PropTypes.string.isRequired,
};

function NoteFooter({ tags }) {
  return (
    <div className='note-footer'>
      <p className='note-footer-tags'>{tags}</p>
    </div>
  );
}

NoteFooter.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Note;
