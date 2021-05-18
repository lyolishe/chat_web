import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../api/swagger";

type UserState = User | null

const initialState: UserState = null as UserState;

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state = action.payload;
        },
        logout: () => initialState,
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;