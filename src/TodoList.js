function TodoList({ list, onComplete, onDelete }) {
  return (
    <div>
      {list.map(({ id, text }) => {
        return (
          <div key={id}>
            <button onClick={() => onComplete({ id, text })}>✔</button>
            <span>{text}</span>
            <button onClick={() => onDelete(id)}>❌</button>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
