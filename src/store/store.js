import { configureStore } from '@reduxjs/toolkit'
import userReduser from './slices/userSlice'
import coursesReduser from './slices/coursesSlice'

export const store = configureStore({
  reducer: {
    user: userReduser,
    courses: coursesReduser,
  },
})
