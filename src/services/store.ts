import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

const store = configureStore({
  reducer: reducers
})

export { store };
export type AppDispatch = typeof store.dispatch
