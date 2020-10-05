import React from "react";
import "./App.css";
import Header from "./components/header/header";
import NotesGrid from "./components/notes_gird/notesgrid";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateNote from "./components/note_create_icon/note_create_icon";
import CreateNoteForm from "./components/note_create_form/note_create_form";
import TagsManager from "./components/tags_manager/tags_manager";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header title='Seavus Notes' action='Manage tags' />

        <Switch>
          <Route exact path='/' component={NotesGrid} />

          <Route path='/edit-note/:id' />

          <Route path='/manage-tags' component={TagsManager} />

          <Route path='/create-note' component={CreateNoteForm} />
        </Switch>

        <CreateNote />
      </div>
    </BrowserRouter>
  );
}

export default App;
