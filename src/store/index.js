import { configureStore } from "@reduxjs/toolkit"
import CourseReducer from './CourseSlice'
import contactsReducer from './ContactsSlice'
import userSlice from "./userSlice";
import contentReducer from './contentSlice';

export const store = configureStore({
    reducer: {
        CourseReducer,
        userSlice,
        contactsReducer,
        contentReducer
    }
})