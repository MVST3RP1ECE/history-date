import { createSlice } from "@reduxjs/toolkit";
import { Iaction, Page } from "Components/types";

// export const initialPage: Page = 1
export const initialPage: number = 1

export const page = createSlice({
    name: "page",
    initialState: initialPage,
    reducers: {
        increment: (state) => {
            return state += 1
        },
        decrement: (state) => {
            return state -= 1
        },
        setPage: (state, action: Iaction) => {
            return state = action.payload
        }
    }
})

export const { increment, decrement, setPage } = page.actions