import { TodoListItem } from "./TodoListItem"

export const TodoList = ({
  todos,
  handleToggle,
  handleDelete,
}: {
  todos: any
  handleToggle: any
  handleDelete: any
}) => {
  return (
    <ul className="list-group list-group-flush">
      {todos?.map((todo: any, i: number) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={i}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}
