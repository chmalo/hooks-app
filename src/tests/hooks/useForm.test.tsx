import { describe, expect, test } from "vitest"
import {renderHook, act} from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Testing hook useForm", () => {

    const initialForm = {
        name: "Christian",
        email: "christian@gmail.com",
    }

    test("it should return form default values", () => {
        const {result} = renderHook(() => useForm(initialForm))
        const [values, handleInputChange, reset] = result.current

        expect(values).toEqual(initialForm)
        expect(typeof handleInputChange).toEqual('function')
        expect(typeof reset).toEqual('function')
    })

    test("it should change the form value (name change)", () => {
        const {result} = renderHook(() => useForm(initialForm))
        const [ , handleInputChange] = result.current

        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Gregorio jose'
                }
            });
        })

        const [values] = result.current
        expect(values).toEqual({...initialForm, name: 'Gregorio jose'});
    })

    test("it should reset the form", () => {
        const {result} = renderHook(() => useForm(initialForm))
        const [ , handleInputChange, reset] = result.current

        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Gregorio jose'
                }
            });

            reset()
        })

        const [values] = result.current
        expect(values).toEqual(initialForm);
    })
})