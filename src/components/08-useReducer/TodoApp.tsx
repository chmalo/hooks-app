import "./styles.css"
import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"

const init = () => {
  // @ts-ignore
  return JSON.parse(localStorage.getItem("todos")) || []
}

interface Todos {
  id: number
  desc: string
  done: boolean
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleDelete = (todoId: string) => {
    dispatch({
      type: "delete",
      payload: todoId,
    })
  }

  const handleToggle = (todoId: string) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    })
  }

  const handleAddTodo = (newTodo: Todos) => {
    dispatch({
      type: "add",
      payload: newTodo,
    })
  }

  return (
    <div>
      <h1>TodoApp ({todos?.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  )
}
