import React, { useState } from "react";

import Form from "../form/form";
import { GrEdit } from "react-icons/gr";
import { CgCloseR } from "react-icons/cg";

function Todo({ notes, compliteNote, removeNote, editNote }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitEdit = (val) => {
    editNote(edit.id, val);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitEdit} />;
  }

  return notes.map((note, index) => (
    <div
      className={note.isComplete ? "note__row complite" : "note__row"}
      key={index}
    >
      <div key={note.id} onClick={() => compliteNote(note.id)}>
        {note.text}
      </div>
      <div className="icons">
        <div>
          <GrEdit
            onClick={() => setEdit({ id: note.id, value: note.text })}
            className="edit__icon"
          />
          <CgCloseR
            onClick={() => removeNote(note.id)}
            className="remove__icon"
          />
        </div>
      </div>
    </div>
  ));
}
export default Todo;
