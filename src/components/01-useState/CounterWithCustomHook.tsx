import "./counter.css"
import { useCounter } from "../../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter()

  return (
    <>
      <h1>Counter with customHook: {state}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          increment()
        }}
      >
        Increment
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          decrement()
        }}
      >
        Decrement
      </button>
    </>
  )
}
