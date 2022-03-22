function Todo({ todo: { id, text }, onDelete, onComplete }) {
  return (
    <div>
      <button onClick={() => onComplete(id)}>✔</button>
      <span>{text}  </span>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  );
}

function List({ todos, onDelete, onComplete }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </div>
  );
}

export default List;
