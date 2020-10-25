import { useState } from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  )
}

export default App
