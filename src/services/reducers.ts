import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "./store/app/app.slice";
import { slideSlice } from "./store/slide/slide.slice";

const reducers = combineReducers({
  app: appSlice.reducer,
  slide: slideSlice.reducer
})

export { reducers }
export type RootStateType = ReturnType<typeof reducers>