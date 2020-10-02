import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Box from "@material-ui/core/Box";
import NotesGrid from "./components/notes_gird/notesgrid";

function App() {
  return (
    <div className='App'>
      <Header title='Seavus Notes' />
      <Box m={4}>
        <NotesGrid />
      </Box>
    </div>
  );
}

export default App;
