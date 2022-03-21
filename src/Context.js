function Todo({ todo: { id, text } }) {
  return (
    <div>
      <input type='checkbox'></input>
      <span>{text}</span>
    </div>
  );
}

function Context({ todos }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default Context;
