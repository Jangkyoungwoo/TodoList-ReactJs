import { useState } from "react";

function AddForm({ addItem }) {
  const [text, setText] = useState("");

  const changeInput = (event) => {
    setText(event.target.value);
  };
  const addTodoItem = (event) => {
    event.preventDefault();
    addItem(text);
    setText("");
  };

  return (
    <form>
      <input
        onChange={changeInput}
        value={text}
        typeof="text"
        placeholder="todos"
      />
      <button onClick={addTodoItem} type="submit">
        Add
      </button>
    </form>
  );
}

export default AddForm;
