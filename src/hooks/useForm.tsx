import { ChangeEvent, useState } from "react"

export const useForm = (initialState: any = {}) => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    console.log(target.name)
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleInputChange]
}
