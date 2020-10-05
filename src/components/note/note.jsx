import React from "react";
import PropTypes from "prop-types";
import "./note_style.css";
import ClearIcon from "@material-ui/icons/Clear";
import CreateIcon from "@material-ui/icons/Create";
import { Grid } from "@material-ui/core";

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
      <Grid container>
        <Grid item xs={10}>
          <span className='note-footer-tags'>{tags}</span>
        </Grid>
        <Grid item xs={2}>
          <CreateIcon />
        </Grid>
      </Grid>
    </div>
  );
}

NoteFooter.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Note;
