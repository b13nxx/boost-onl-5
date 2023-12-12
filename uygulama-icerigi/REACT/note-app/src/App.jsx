import "./App.css";
import Notes from "./components/Notes";
import AddNote from "./components/AddNote";
import { useState } from "react";
import EditNote from "./components/EditNote";

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState("");

  const addNote = (text) => {
    setNotes((prevNotes) => [...prevNotes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const startEditing = (note) => {
    setEditNote(note);
  };

  const updateNote = (id, text) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text } : note
    );
    setNotes(updatedNotes);
    setEditNote("")
  };

  return (
    <div className="app">
      <h1>Notes App</h1>
      <div className="note-section">
        <Notes notes={notes} deleteNote={deleteNote} startEditing={startEditing}/>
        <AddNote addNote={addNote} />
      </div>

      {editNote && (
        <EditNote updateNote={updateNote} editNote={editNote} onCancel={() => setEditNote("")}/>
      )}
    </div>
  );
}

export default App;
