import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './components/Protected-route/protectedRoute'
import { NotFound } from './pages/not-found-page/NotFound'
import { Main } from './pages/main-page/MainPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        {/* <Route
          path=""
          element={
            <ProtectedRoute>
              <MainTrackList />
            </ProtectedRoute>
          }
        />
        <Route
          path="favorites"
          element={
            <ProtectedRoute>
              <Favorites />
            </ProtectedRoute>
          }
        />
        <Route
          path="category/:id"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        /> */}
      </Route>
      {/* здесь страница авторизации */}
      {/* <Route path="/login" element={<Login />} /> */}
      {/* здесь страница регистрации */}
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
