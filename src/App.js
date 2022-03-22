import { useState } from 'react';
import Context from './Context'

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const LIST_KEY = "list";
  let toDoAry = [];

  const todoStorage = () => {
    localStorage.setItem(LIST_KEY, JSON.stringify(toDoAry));
  }
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleAdd = (text) => {
    if (text !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text,
          isChecked: false
        }
      ]);
      toDoAry.push(
        [
          ...todos,
          {
            id: Date.now(),
            text,
            isChecked: false,
          }
        ]
      );
    }
  }

  const handleSetTodos = () => {
    handleAdd(text);
    todoStorage();
    setText("");
  };

  const handleDelete = (id) => {
    toDoAry = todos.filter((todo) => todo.id !== id);
    console.log(id);
    setTodos(toDoAry);
    todoStorage();
  }

  return (
    <div className="App">
      <h1>List</h1>
      <input onChange={handleChangeText} value={text} typeof='text' placeholder='todos'></input>
      <button onClick={handleSetTodos}>Add</button>
      <Context todos={todos} onDelete={handleDelete} />
    </div>
  );
}

export default App;
