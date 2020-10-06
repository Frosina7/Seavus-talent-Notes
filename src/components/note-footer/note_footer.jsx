import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateIcon from "@material-ui/icons/Create";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class NoteFooter extends Component {
  render() {
    return (
      <div className='note-footer'>
        <Grid container>
          <Grid item xs={10}>
            <span className='note-footer-tags'>{this.props.tags}</span>
          </Grid>
          <Grid item xs={2}>
            <Link to='/edit-note/{id}'>
              <CreateIcon />
            </Link>
          </Grid>
        </Grid>
      </div>
    );
  }
}

NoteFooter.propTypes = {
  tags: PropTypes.array.isRequired,
};
