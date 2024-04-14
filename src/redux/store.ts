import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";


export const store = configureStore({

    reducer: {
        
        theme: themeReducer,
       
    }
})

export type State = ReturnType<typeof store.getState>;