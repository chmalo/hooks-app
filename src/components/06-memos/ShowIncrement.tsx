import { memo } from "react"

// eslint-disable-next-line react/display-name
export const ShowIncrement = memo(({ increment }: { increment: any }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5)
      }}
    >
      Incrementar
    </button>
  )
})
