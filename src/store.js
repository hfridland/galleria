import { configureStore } from "@reduxjs/toolkit";
import { stateIndReducer } from "./features/status-slide";

export const store = configureStore({
    reducer: {
        stateInd: stateIndReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
