import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/Protected-route/protectedRoute'
import { NotFound } from './pages/not-found-page/NotFound'
import { Main } from './pages/main-page/MainPage'
import { Profile } from './pages/profile-page/Profile'
import { Сourse } from './pages/course-page/Сourse'
import { Workout } from './pages/workout-page/Workout'
import { Login } from './pages/login-page/Login'
import { Register } from './pages/login-page/Registration'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="course/:id" element={<Сourse />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="workout/:id"
        element={
          <ProtectedRoute>
            <Workout />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
