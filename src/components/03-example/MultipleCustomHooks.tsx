import "../02-useEffect/effects.css"
import { useFetch } from "../../hooks/useFetch"
import { useCounter } from "../../hooks/useCounter"

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  // @ts-ignore
  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h1>BreakibgBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0"> {quote}</p>
          <br />
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={increment}>
        siguiente quote
      </button>
    </div>
  )
}
