import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { UserInterFace } from "@/services/api/user";
import Swal from "sweetalert2";

interface AuthState {
  user: UserInterFace | Partial<UserInterFace> | null;
  token: string | null;
  isLoading: boolean | null;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: Partial<UserInterFace>; token: string }>
    ) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    updateProfile: (state, action: PayloadAction<Partial<UserInterFace>>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateProfile } =
  authSlice.actions;
export default authSlice.reducer;
