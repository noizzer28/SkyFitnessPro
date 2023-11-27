import { useSelector, useDispatch } from 'react-redux'
import { setUser } from 'store/slices/userSlice'
import { useEffect } from 'react'

export function useAuth() {
  const dispatch = useDispatch()

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'))

    if (userData) {
      dispatch(
        setUser({
          email: userData.email,
          id: userData.uid,
          token: userData.accessToken,
        }),
      )
    }
  }, [dispatch])
  const { email, token, id } = useSelector((state) => state.user)

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}
