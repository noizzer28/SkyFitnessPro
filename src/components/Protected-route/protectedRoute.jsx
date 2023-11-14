import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children, redirectPath = '/login' }) => {
  // условие авторизации юзера
  const userLogin = true
  if (!userLogin) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}
