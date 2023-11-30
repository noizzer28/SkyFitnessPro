import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
  userCourses: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
    },
    setUserCourses(state, action) {
      state.userCourses = action.payload.userCourses
    },
    removeUser(state) {
      state.email = null
      state.token = null
      state.id = null
      state.userCourses = null
    },
  },
})

export const { setUser, removeUser, setUserCourses } = userSlice.actions

export default userSlice.reducer
