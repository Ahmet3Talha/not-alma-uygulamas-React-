import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Not Alma Uygulaması</h1>
      <input
        type="text"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="Yeni bir not ekleyin..."
      />
      <button onClick={addNote}>Ekle</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => deleteNote(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
