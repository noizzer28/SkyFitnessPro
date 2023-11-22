import { Navigate } from 'react-router-dom'
import { useAuth } from 'hooks/use-auth'

export const ProtectedRoute = ({ children, redirectPath = '/login' }) => {
  const { isAuth } = useAuth()
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />
  }
  return children
}
