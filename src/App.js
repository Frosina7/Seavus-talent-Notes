import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Box from "@material-ui/core/Box";
import NotesGrid from "./components/notes_gird/notesgrid";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateNote from "./components/note_create/note_create";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header title='Seavus Notes' action='Manage tags' />
        <Switch>
          <Box m={4}>
            <NotesGrid />
          </Box>
          <Route path='/edit-note/{id}' />
          <Route path='/manage-tags' />
          <Route path='/create-note' />
        </Switch>
        <CreateNote />
      </div>
    </BrowserRouter>
  );
}

export default App;
