import { Todo as TodoInterface } from '../types/Todo'

interface TodoProps extends TodoInterface {}

const Todo: React.FC<TodoProps> = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Todo
