import "../02-useEffect/effects.css"
import { MutableRefObject, useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>

  const handleClick = () => {
    inputRef.current.select()
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input className="form-control" placeholder="Su nombre" ref={inputRef} />

      <button className="btn btn-outline-primary mt-2" onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}
