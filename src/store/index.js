import { configureStore } from "@reduxjs/toolkit"
import postsReducer from './PostsSlice'
import ContactsReducer from './ContactsSlice'


export const store = configureStore({
    reducer: {
        postsReducer,
        ContactsReducer
    }
})