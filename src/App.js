import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Box from "@material-ui/core/Box";
import NotesGrid from "./components/notes_gird/notesgrid";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Note_Create from "./components/note_create/note_create";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header title='Seavus Notes' />
        <Switch>
          <Box m={4}>
            <NotesGrid />
          </Box>
          <Route path='/edit-note/{id}' />
          <Route path='/manage-tags' />
        </Switch>
        <Route path='/create-note' component={Note_Create} />
      </div>
    </BrowserRouter>
  );
}

export default App;
