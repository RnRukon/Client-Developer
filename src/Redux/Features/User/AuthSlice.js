import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from '../../../Api/Axios';

const initialState = {
    user: {},
    isLoading: true,
    isSuccess: false,
    isError: false,
    error: '',

}

export const registration = createAsyncThunk(
    "auth/registration",
    async (data) => {
        const response = await Axios.post("/users/registration", data);
        return response;

    }
)
export const login = createAsyncThunk(
    "auth/login",
    async (data) => {
        const response = await Axios.post("/users/login", data);
        return response;

    }
)



export const getMe = createAsyncThunk(
    "auth/getMe",
    async () => {
        const response = await Axios.get("/users/getMe");
        return response;

    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
            state.error = '';
            state.isError = '';
            state.isLoading = false;
            state.isSuccess = false;
            localStorage.removeItem('developerAccessToken');

        },
        loading: (state) => {
            state.isLoading = false;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(registration.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(registration.fulfilled, (state) => {
            state.isLoading = false;
            state.isError = false;
            state.error = "";

        }).addCase(registration.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;

        }).addCase(login.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(login.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.isSuccess = true
            state.user = localStorage.setItem('developerAccessToken', payload.data.token);;
            state.isError = false;
            state.error = "";

        }).addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
            state.isError = true;
            state.error = action.error.message;

        }).addCase(getMe.pending, (state) => {
            state.isLoading = true;
            state.isError = false
            state.error = "";

        }).addCase(getMe.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.user = payload?.data?.result.user;
            state.isError = false;
            state.error = "";

        }).addCase(getMe.rejected, (state, action) => {
            state.isLoading = false;
            state.user = null;
        })
    }
})
export const { logout, loading } = authSlice.actions
export default authSlice.reducer;