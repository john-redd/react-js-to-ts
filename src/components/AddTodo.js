import { useState } from 'react'
import { v4 } from 'uuid'

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          addTodo({ name: newTodo, id: v4() })
          setNewTodo('')
        }}
      >
        <input
          value={newTodo}
          onChange={({ target: { value } }) => setNewTodo(value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
