import { useContext } from "react"
import { UserContext } from "./UserContext"

export const LoginScreen = () => {
  // @ts-ignore
  const { setUser } = useContext(UserContext)

  const user = {
    id: "1235",
    name: "christian",
  }

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => setUser(user)}>
        Login
      </button>
    </div>
  )
}
