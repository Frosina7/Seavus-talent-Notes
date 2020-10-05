import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Box from "@material-ui/core/Box";
import NotesGrid from "./components/notes_gird/notesgrid";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CreateNote from "./components/note_create_icon/note_create";
import CreateNoteForm from "./components/note_create_form/note_create_form";
import { Link } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header title='Seavus Notes' action='Manage tags' />

        <Switch>
          <Box m={4}>
            <NotesGrid />
          </Box>
        </Switch>
        <Switch>
          <Route exact path='/edit-note/:id' />
          <Link to='/edit-note/:id' />

          <Route exact path='/manage-tags' />
          <Link to='/manage-tags' />
        </Switch>
        <Switch>
          <Route exact path='/create-note' component={CreateNoteForm} />
        </Switch>
        <CreateNote />
      </div>
    </BrowserRouter>
  );
}

export default App;
