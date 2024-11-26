import { createSlice } from "@reduxjs/toolkit";
import { Iaction, IglobalValue } from "Components/types";

export const initialValue: IglobalValue = {
    timeInterval: 1,
    timeSwitchController: 1,
    timeSlider: 1,
    timeBackCircle: 1
}

export const globalSlice = createSlice({
    name: "global",
    initialState: initialValue,
    reducers: {
        moveForward: (state) => {
            if ((state.timeBackCircle && state.timeSlider && state.timeSwitchController && state.timeInterval) < 4) {
                state.timeBackCircle += 1;
                state.timeInterval += 1;
                state.timeSlider += 1;
                state.timeSwitchController += 1;
            }
        },
        moveBack: (state) => {
            if ((state.timeBackCircle && state.timeSlider && state.timeSwitchController && state.timeInterval) > 1) {
                state.timeBackCircle -= 1;
                state.timeInterval -= 1;
                state.timeSlider -= 1;
                state.timeSwitchController -= 1;
            }
        },
        moveToChosen: (state, actions: Iaction) => {
            state.timeBackCircle = actions.payload;
            state.timeInterval = actions.payload;
            state.timeSlider = actions.payload;
            state.timeSwitchController = actions.payload;
        }
    }
})

export const { moveForward, moveBack, moveToChosen } = globalSlice.actions