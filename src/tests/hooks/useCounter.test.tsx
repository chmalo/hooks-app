import { describe, expect, test } from "vitest"
import {renderHook, act} from "@testing-library/react-hooks";
import {useCounter} from "../../hooks/useCounter";


describe("Testing hook useCounter", () => {
    test("it should return default value", () => {
        const {result} = renderHook(()=> useCounter())

        expect(result.current.counter).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')
    })

    test("it should have counter at 100", () => {
        const {result} = renderHook(()=> useCounter(100))

        expect(result.current.counter).toBe(100)
    })

    test("it should increment the counter at 1", () => {
        const {result} = renderHook(()=> useCounter(100))
        const {increment} = result.current;

        act(() => {
            increment();
        })

        expect(result.current.counter).toBe(101)
    })

    test("it should decrement the counter at 1", () => {
        const {result} = renderHook(()=> useCounter(100))
        const {decrement} = result.current;

        act(() => {
            decrement();
        })

        expect(result.current.counter).toBe(99)
    })

    test("it should reset the counter", () => {
        const {result} = renderHook(()=> useCounter(100))
        const {decrement, reset} = result.current;

        act(() => {
            decrement();
            reset();
        })

        expect(result.current.counter).toBe(100)
    })
})