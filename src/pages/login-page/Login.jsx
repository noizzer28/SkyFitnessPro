import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { DarkBG } from '../../App.styles'
import { FormAuth } from 'components/FormAuth/FormAuth'
import { setUser } from 'store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }),
        )
        navigate('/')
      })
      .catch(console.error)
  }

  return (
    <>
      <DarkBG>
        <FormAuth
          title={'Войти'}
          handleClick={handleLogin}
          typeLogin={true}
        ></FormAuth>
      </DarkBG>
    </>
  )
}
