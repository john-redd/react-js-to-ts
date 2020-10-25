import { Todo as TodoInterface } from '../types/Todo'
import Todo from './Todo'

interface TodoListProps {
  todos: TodoInterface[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
