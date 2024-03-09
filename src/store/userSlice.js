import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    token: null,
    id: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { email, token, id } = action.payload;
            return {
                ...state,
                email,
                token,
                id
            };
        },
        removeUser: (state) => {
            return {
                ...state,
                email: null,
                token: null,
                id: null
            };
        }
    }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
