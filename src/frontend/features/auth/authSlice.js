import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialAuthState = {
  token: localStorage.getItem("USER_TOKEN") ?? null,
  user: JSON.parse(localStorage.getItem("USER_DATA")) || null,
  status: null,
  error: null,
};

const login = createAsyncThunk(
  "/auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const signup = createAsyncThunk(
  "/auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/auth/signup`, { ...userData });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("USER_TOKEN");
      localStorage.removeItem("USER_DATA");
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = "loading";
    },

    [login.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.status = "success";
      state.user = payload.foundUser;
      localStorage.setItem("USER_TOKEN", payload.encodedToken);
      localStorage.setItem("USER_DATA", JSON.stringify(payload.foundUser));
    },

    [login.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload.errors;
    },

    [signup.pending]: (state) => {
      state.status = "loading";
    },

    [signup.fulfilled]: (state, { payload }) => {
      state.token = payload.encodedToken;
      state.status = "success";
      state.user = payload.createdUser;
      localStorage.setItem("USER_TOKEN", payload.encodedToken);
      localStorage.setItem("USER_DATA", JSON.stringify(payload.createdUser));
    },

    [signup.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload.errors;
    },
  },
});

export const authReducer = authSlice.reducer;

export { login, signup };
export const { logout } = authSlice.actions;
