import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Input from "./Input";
import List from "./List"
import CompleteList from "./CompleteList"
import { actionCreators } from './store';

function App({ list, addTodo }) {
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

  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const handleSetTodos = (event) => {
    event.preventDefault();
    if (text !== "") {
      addTodo(text);
    }
    todoStorage();
    setText("");
  };

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

  return (
    <div className="App">
      <Input onChange={handleChangeText} onClick={handleSetTodos} text={text} />
      <List todos={list} onDelete={handleDelete} onComplete={handleComplete} />
      <CompleteList comTodos={comTodos} onDelete={handleDeleteComplete} onCheck={onCheck} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { list: state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(actionCreators.addTodo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
