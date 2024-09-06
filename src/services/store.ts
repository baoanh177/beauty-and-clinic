import { legacy_createStore } from "@reduxjs/toolkit";
import { reducers } from "./reducers";

const store = legacy_createStore(reducers)

export { store };
export type AppDispatch = typeof store.dispatch
