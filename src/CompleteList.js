import styles from "./CompleteList.module.css"

function ComTodo({ comTodo: { id, text, isChecked }, onDelete, onCheck }) {
  return (
    <div>
      <input type="checkbox" onChange={() => onCheck(id)} checked={isChecked}></input>
      <span className={isChecked ? styles.comTodo : ""}>{text} </span>
      <button onClick={() => onDelete(id)}>❌</button>
    </div>
  )
}

function CompleteList({ comTodos, onDelete, onCheck }) {
  return (
    <div>
      {comTodos.map((comTodo) => (
        <ComTodo comTodo={comTodo} key={comTodo.id} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </div>
  );
}

export default CompleteList;