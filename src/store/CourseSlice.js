import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cours: {
        cours_title: 'САМЫЕ ВОСТРЕБОВАННЫЕ IT- КУРСЫ В КЫРГЫЗСТАНЕ',
        cours_block_post_title: 'Мы постоянно исследуем рынок труда в поиске самых популярных и перспективных IT-направлений'
    }
}

const courseSlice = createSlice({
    name: "courseSlice",
    initialState,
    reducers: {
        postsInfo: (state, action) => {
            state.cours = action.payload
        }
    }
})

export const { postsInfo } = courseSlice.actions

export default courseSlice.reducer;