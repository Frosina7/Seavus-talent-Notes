import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Box from "@material-ui/core/Box";
import NotesGrid from "./components/notes_gird/notesgrid";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header title='Seavus Notes' />
        <Box m={4}>
          <NotesGrid />
        </Box>
        <Route path='/create-note' />
        <Route path='/edit-note/{id}' />
        <Route path='/manage-tags' />
      </div>
    </BrowserRouter>
  );
}

export default App;
