import { render } from "@testing-library/react";
import {describe, expect, test, vitest} from "vitest";
import {MultipleCustomHooks} from "../../../components/03-example/MultipleCustomHooks";
import {useFetch} from "../../../hooks/useFetch";
import {useCounter} from "../../../hooks/useCounter";
vitest.mock("../../../hooks/useFetch")
vitest.mock("../../../hooks/useCounter")



describe("Testing in MultipleCustomHooks", () => {

    // @ts-ignore
    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    })

    test("it should show correctly", () => {

        // @ts-ignore
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })

        const {container} = render(<MultipleCustomHooks />)
        expect(container).toMatchSnapshot()
    })

    // test("it should show info correctly", () => {
    //
    //     useFetch.mockReturnValue({
    //         data: [{
    //             author: 'Christian',
    //             quote: 'hola mundo'
    //         }],
    //         loading: false,
    //         error: null
    //     })
    //
    //     const {container} = render(<MultipleCustomHooks />)
    // })

})