import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./auth.thunk";
import { EFetchStatus } from "@/shared/enum";
import { commonStaticReducers } from "@/services/shared";

export interface IAuthInitialState {
  status: EFetchStatus;
  message: string;
  profile?: {
    email: string;
    name: string;
  };
}

const initialState: IAuthInitialState = {
  status: EFetchStatus.IDLE,
  message: "",
  profile: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ...commonStaticReducers(),
    setProfile: (state, { payload }) => {
      state.profile = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = EFetchStatus.PENDING;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = EFetchStatus.FULFILLED;
        const { accessToken, refreshToken } = payload.data;
        localStorage.setItem("accessToken", JSON.stringify(accessToken));
        localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
        state.message = "You are successfully logged in";
      })
      .addCase(login.rejected, (state, { payload }: any) => {
        state.status = EFetchStatus.REJECTED;
        state.message = payload.errors;
      });
    builder
      .addCase(register.pending, (state) => {
        state.status = EFetchStatus.PENDING;
      })
      .addCase(register.fulfilled, (state) => {
        state.status = EFetchStatus.FULFILLED;
        state.message = "Register successfully";
      })
      .addCase(register.rejected, (state, { payload }: any) => {
        state.status = EFetchStatus.REJECTED;
        state.message = payload.errors;
      });
  },
});

export { authSlice };
export const { resetStatus, setProfile } = authSlice.actions;
