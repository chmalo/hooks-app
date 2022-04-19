import { useContext } from "react"
import { UserContext } from "./UserContext"

export const AboutScreen = () => {
  // @ts-ignore
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className="btn btn-warning" onClick={() => setUser({})}>
        Logout
      </button>
    </div>
  )
}
