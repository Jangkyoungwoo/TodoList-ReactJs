import { useEffect, useState } from "react";
import List from "./List"
import CompleteList from "./CompleteList"

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [comTodos, setComTodos] = useState([]);

  const LIST_KEY = "list";
  const COMPLETE_KEY = "complete"
  let toDoAry = [];
  let completeAry = [];

  const todoStorage = () => {
    localStorage.setItem(LIST_KEY, JSON.stringify(toDoAry));
  }

  const completeStorage = () => {
    localStorage.setItem(COMPLETE_KEY, JSON.stringify(completeAry));
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

        }
      ]);
      toDoAry.push(
        ...todos,
        {
          id: Date.now(),
          text,
        }
      );
    }
  }

  const addcompleteStorage = (id) => {
    let complete = todos.filter((compTodo) => compTodo.id === id);
    setComTodos([
      ...comTodos,
      {
        id,
        text: complete[0].text,
        isChecked: false,
      }
    ]);
    completeAry.push(
      ...comTodos,
      {
        id,
        text: complete[0].text,
        isChecked: false,
      }
    );
  };

  const onCheck = (id) => {
    setComTodos(
      comTodos.map(comTodo =>
        comTodo.id === id ? { ...comTodo, isChecked: !comTodo.isChecked } : comTodo
      )
    )
  }

  const handleSetTodos = (event) => {
    event.preventDefault();
    handleAdd(text);
    todoStorage();
    setText("");
  };

  const handleDelete = (id) => {
    toDoAry = todos.filter((todo) => todo.id !== id);
    setTodos(toDoAry);
    todoStorage();
  }

  const handleComplete = (id) => {
    addcompleteStorage(id); //localStorage 및 state에 추가
    completeStorage(completeAry);//set localStorage
    handleDelete(id);
  }

  const handleDeleteComplete = (id) => {
    completeAry = comTodos.filter((compTodo) => compTodo.id !== id);
    setComTodos(completeAry);
    completeStorage();
  }

  useEffect(() => {
    const todosData = localStorage.getItem(LIST_KEY);
    const comTodosData = localStorage.getItem(COMPLETE_KEY);
    if (todosData) {
      setTodos(JSON.parse(todosData));
    }
    if (comTodosData) {
      setComTodos(JSON.parse(comTodosData));
    }
  }, []);

  return (
    <div className="App">
      <h1>TodoList</h1>
      <form>
        <input onChange={handleChangeText} value={text} typeof="text" placeholder="todos"></input>
        <button onClick={handleSetTodos}>Add</button>
      </form>
      <List todos={todos} onDelete={handleDelete} onComplete={handleComplete} />
      <h1>Complete</h1>
      <CompleteList comTodos={comTodos} onDelete={handleDeleteComplete} onCheck={onCheck} />
    </div>
  );
}

export default App;
