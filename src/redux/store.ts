import { configureStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./counterSlice";
import { themeReducer } from "./themeSlice";
// import { personReducer } from "./personSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer, // contesto
    theme: themeReducer, // contesto
    // person: personReducer, // contesto
  },
});

export type State = ReturnType<typeof store.getState>;
