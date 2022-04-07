import "./layout.css"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"
import { MutableRefObject, useLayoutEffect, useRef, useState } from "react"

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1)

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  // @ts-ignore
  const { quote } = !!data && data[0]

  const parrafo = useRef() as MutableRefObject<HTMLParagraphElement>
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(parrafo.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={parrafo}>
          {quote}
        </p>
        <br />
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button className="btn btn-primary" onClick={increment}>
        siguiente quote
      </button>
    </div>
  )
}
