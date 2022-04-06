function Input({ onChange, onClick, text }) {

  return (
    <div>
      <h1>TodoList</h1>
      <form onClick={onClick}>
        <input onChange={onChange} value={text} typeof="text" placeholder="todos"></input>
        <button >Add</button>
      </form>
    </div>

  )
}

export default Input;