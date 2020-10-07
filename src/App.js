import React from "react";
import "./App.css";
import Header from "./components/header/header";
import NotesGrid from "./components/grid/grid";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateNote from "./components/create-icon/create_icon";
import CreateNoteForm from "./components/create/create";
import TagsManager from "./components/tag/tag";
import EditNote from "./components/edit/edit";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header title='Seavus Notes' action='Manage tags' />
        <Switch>
          <Route exact path='/' component={NotesGrid} />

          <Route path='/edit-note/{id}' component={EditNote} />

          <Route path='/manage-tags' component={TagsManager} />

          <Route path='/create-note' component={CreateNoteForm} />
        </Switch>

        <CreateNote />
      </div>
    </BrowserRouter>
  );
}

export default App;
