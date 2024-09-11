import { IThunkPayload } from "@/shared/shared-interfaces";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = `${import.meta.env.VITE_API_URL}/auth`;

export const login = createAsyncThunk("auth/login", async (payload: IThunkPayload, { rejectWithValue }) => {
  try {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload.body),
    });
    const data = await response.json();
    if (!response.ok) return rejectWithValue(data);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk("auth/register", async (payload: IThunkPayload, { rejectWithValue }) => {
  try {
    const response = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload.body),
    });
    const data = await response.json();
    if (!response.ok) return rejectWithValue(data);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, { rejectWithValue }) => {
  const accessJSON = localStorage.getItem("accessToken");
  if (!accessJSON) throw new Error();
  const access = JSON.parse(accessJSON);
  try {
    const response = await fetch(`${url}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
    });
    const data = await response.json();
    if (!response.ok) return rejectWithValue(data);
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response.data);
  }
});
