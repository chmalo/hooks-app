import { memo } from "react"

// eslint-disable-next-line react/display-name
export const Small = memo<{ value: number }>(({ value }: { value: number }) => {
  console.log("me volvi a llamar")
  return <small> {value}</small>
})
