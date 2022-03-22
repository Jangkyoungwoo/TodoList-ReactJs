function Todo({ todo: { id, text, isChecked }, onDelete }) {
  return (
    <div>
      <input type='checkbox' checked={isChecked}></input>
      <span>{text}  </span>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  );
}

function Context({ todos, onDelete }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Context;
