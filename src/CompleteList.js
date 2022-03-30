function CompleteList({ list, onDelete }) {
  return (
    <>
      {list.length > 0 ? <h1>CompleteList</h1> : ""}
      <div>
        {list.map(({ id, text }) => {
          return (
            <div key={id}>
              <span>{text}</span>
              <button onClick={() => onDelete(id)}>❌</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CompleteList;
