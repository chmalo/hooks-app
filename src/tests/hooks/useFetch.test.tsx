import { renderHook } from "@testing-library/react-hooks";
import {describe, expect, test} from "vitest";
import {useFetch} from "../../hooks/useFetch";


describe("Testing hook useFetch", () => {
    test("it should return default values", () => {
        const {result} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);
    })

    test("it should have info correct, loading false, error false", async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
        await waitForNextUpdate({timeout: 5000})
        const {data, loading, error} = result.current;

        // @ts-ignore
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    })

    test("it should handle the error", async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'))
        await waitForNextUpdate({ timeout: 2000 })
        const {data, loading, error} = result.current;

        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('No se pudo cargar la info');
    })
})