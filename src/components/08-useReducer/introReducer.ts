// @ts-ignore
const initialState = [
  {
    id: 1,
    todo: "comprar leche",
    done: false,
  },
]

const introReducer = (state: any = initialState, action?: any) => {
  if (action?.type === "agregar") {
    return [...state, action.payload]
  }

  return state
}

let todos = introReducer()

const newTdo = {
  id: 1,
  todo: "comprar pan",
  done: false,
}
const action = {
  type: "agregar",
  payload: newTdo,
}

todos = introReducer(todos, action)
console.log(todos)
