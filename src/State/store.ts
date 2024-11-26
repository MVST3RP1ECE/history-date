import { configureStore } from "@reduxjs/toolkit";
import { globalSlice } from "./GlobalState/globalSlice";
import { page } from "./Pages/page";


export const store = configureStore({
    reducer: {
        globalState: globalSlice.reducer,
        page: page.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch