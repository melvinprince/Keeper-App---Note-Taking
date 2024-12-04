import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      const newNote = { ...note, key: Date.now() };
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {

    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.key !== id);
      return updatedNotes;
    });
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      <Note notes={notes} onDelete={deleteNote} />
      <Footer />
    </div>
  );
}

export default App;
