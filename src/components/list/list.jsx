import React, { useState } from "react";

import Form from "../form/form";
import Todo from "../todo/todo";

function List() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    if (!note.text || /^\s*$/.test(note.text)) {
      return;
    }
    const newNotes = [note, ...notes];

    setNotes(newNotes);
  };
  const editNote = (noteId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setNotes((prev) =>
      prev.map((item) => (item.id === noteId ? newValue : item))
    );
  };

  const removeNote = (id) => {
    const filteredNotesArr = [...notes].filter((note) => note.id !== id);
    setNotes(filteredNotesArr);
  };

  const compliteNote = (id) => {
    let updatedNotes = notes.map((note) => {
      if (note.id === id) {
        note.isComplite = !note.isComplite;
      }
      return note;
    });
    setNotes(updatedNotes);
  };
  console.log(notes);

  return (
    <div>
      <Form onSubmit={addNote} />
      <Todo
        notes={notes}
        compliteNote={compliteNote}
        removeNote={removeNote}
        editNote={editNote}
      />
    </div>
  );
}

export default List;
