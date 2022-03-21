import { useState } from 'react';
import Context from './Context'

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      text: "리액트 공부하기",
    },
    {
      id: Date.now(),
      text: "밥 먹기",
    }]);

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
      }
    ]);
  }
  const handleSetTodos = () => {
    handleAdd(text);
    setText("");
  };

  return (
    <div className="App">
      <h1>List</h1>
      <input onChange={handleChangeText} value={text} typeof='text' placeholder='todos'></input>
      <button onClick={handleSetTodos}>Add</button>
      <Context todos={todos} />
    </div>
  );
}

export default App;
