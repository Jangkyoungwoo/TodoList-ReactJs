function ComTodo({ comTodo: { id, text }, onDelete }) {
  return (
    <div>
      <span>{text} </span>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  )
}

function CompleteList({ comTodos, onDelete }) {
  return (
    <div>
      {comTodos.map((comTodo) => (
        <ComTodo comTodo={comTodo} key={comTodo.id} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default CompleteList;