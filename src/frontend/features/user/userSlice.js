import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userInitialState = {
  allUsers: [],
  user: null,
  userPosts: [],
  userStatus: "idle",
  error: "",
};

const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await axios.get("/api/users");

  return response.data;
});

const getSingleUser = createAsyncThunk(
  "user/getSingleUser",
  async (username) => {
    const response = await axios.get(`/api/users/${username}`);

    return response.data;
  }
);

const getUserPosts = createAsyncThunk("user/getUserPosts", async (username) => {
  const response = await axios.get(`api/posts/user/${username}`);

  return response.data;
});

const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ token, userData }) => {
    const response = await axios.post(
      `/api/users/edit`,
      { userData },
      {
        headers: { authorization: token },
      }
    );

    return response.data;
  }
);

const followUser = createAsyncThunk(
  "user/followUser",
  async ({ token, followUserId }) => {
    const response = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      { headers: { authorization: token } }
    );

    return response.data;
  }
);

const unfollowUser = createAsyncThunk(
  "user/unfollowUser",
  async ({ token, followUserId }) => {
    const response = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    clearUser: (state) => {
      (state.userStatus = "idle"), (state.user = null);
    },
  },

  extraReducers: {
    [getAllUsers.fulfilled]: (state, { payload }) => {
      state.allUsers = payload.users;
    },

    [getAllUsers.rejected]: (state, { error }) => {
      state.error = error.message;
    },

    [getSingleUser.pending]: (state) => {
      state.userStatus = "loading";
    },
    [getSingleUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.userStatus = "success";
    },

    [getSingleUser.rejected]: (state, { error }) => {
      state.error = error.message;
      state.userStatus = "failed";
    },

    [getUserPosts.pending]: (state) => {
      state.userStatus = "loading";
    },
    [getUserPosts.fulfilled]: (state, { payload }) => {
      state.userPosts = payload.posts;
      state.userStatus = "success";
    },
    [getUserPosts.rejected]: (state, { error }) => {
      state.error = error.message;
      state.userStatus = "failed";
    },

    [updateUser.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
    },
    [updateUser.rejected]: (state, { error }) => {
      state.error = error.message;
    },

    [followUser.fulfilled]: (state, { payload }) => {
      state.allUsers = payload.users;
    },
    [followUser.rejected]: (state, { error }) => {
      state.error = error.message;
    },

    [unfollowUser.fulfilled]: (state, { payload }) => {
      state.allUsers = payload.users;
    },
    [unfollowUser.rejected]: (state, { error }) => {
      state.error = error.message;
    },
  },
});

export const userReducer = userSlice.reducer;

export const { clearUser } = userSlice.actions;

export {
  getAllUsers,
  getSingleUser,
  getUserPosts,
  updateUser,
  followUser,
  unfollowUser,
};
