function Input({ onChange, onClick, text }) {

  return (
    <div>
      <h1>TodoList</h1>
      <form>
        <input onChange={onChange} value={text} typeof="text" placeholder="todos"></input>
        <button onClick={onClick}>Add</button>
      </form>
    </div>

  )
}

export default Input;