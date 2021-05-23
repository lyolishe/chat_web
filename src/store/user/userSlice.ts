import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../api/swagger";

type UserState = { info:  User | null }

const initialState: UserState = {info: null};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.info = action.payload;
        },
        logout: () => initialState,
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;