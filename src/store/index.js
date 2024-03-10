import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './PostsSlice'
import contactsReducer from './ContactsSlice'
import userSlice from "./userSlice";
import contentReducer from './contentSlice';

export const store = configureStore({
    reducer: {
        postsReducer,
        userSlice,
        contactsReducer,
        contentReducer
    }
})