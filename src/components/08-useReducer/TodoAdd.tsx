import { useForm } from "../../hooks/useForm"
import { FormEvent } from "react"

export const TodoAdd = ({ handleAddTodo }: { handleAddTodo: any }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    }

    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          className="form-control"
          placeholder="Aprender..."
          autoComplete="off"
          value={description}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="btn btn-outline-primary mt-1 btn-block"
        >
          Agregar
        </button>
      </form>
    </>
  )
}
