import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Add new note"
        name="text"
        className="note__input"
        onChange={handleChange}
      />
      <button className="add__btn">Add New Note</button>
    </form>
  );
}
export default Form;
