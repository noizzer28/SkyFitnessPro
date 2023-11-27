import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: null,
}

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload.courses
      state.coursesObj = action.payload.coursesObj
    },
  },
})

export const { setCourses } = coursesSlice.actions

export default coursesSlice.reducer
