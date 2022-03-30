import { useState } from "react";
import AddForm from "./AddForm";
import TodoList from "./TodoList";
import CompleteList from "./CompleteList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTodoItem = (text) => {
    const newId = taskList.length ? taskList[taskList.length - 1].id + 1 : 1;
    const task = {
      id: newId,
      status: "TODO",
      text,
    };
    setTaskList([...taskList, task]);
  };

  const completeTodoItem = (item) => {
    const list = taskList.map((element) => {
      if (element.id === item.id) {
        element.status = "COMPLETE";
      }
      return element;
    });
    setTaskList(list);
  };

  const deleteItem = (id) => {
    setTaskList(taskList.filter(({ id: listId }) => id !== listId));
  };

  return (
    <div>
      <h1>TodoList</h1>
      <AddForm addItem={addTodoItem} />
      <TodoList
        list={taskList.filter((element) => element.status === "TODO")}
        onComplete={completeTodoItem}
        onDelete={deleteItem}
      />
      <CompleteList
        list={taskList.filter((element) => element.status === "COMPLETE")}
        onDelete={deleteItem}
      />
    </div>
  );
}

export default App;
