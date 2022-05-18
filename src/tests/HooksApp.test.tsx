import { describe, expect, test } from "vitest"
import { render } from "@testing-library/react"
import HooksApp from "../HooksApp"

describe("Testing <HooksApp/>", () => {
  test("it should show correctly <App/> component", () => {
    const { container } = render(<HooksApp />)
    expect(container).toMatchSnapshot()
  })
})
