import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "./store/app/app.slice";
import { slideSlice } from "./store/slide/slide.slice";
import { authSlice } from "./store/auth/auth.slice";

const reducers = combineReducers({
  app: appSlice.reducer,
  slide: slideSlice.reducer,
  auth: authSlice.reducer
})

export { reducers }
export type RootStateType = ReturnType<typeof reducers>