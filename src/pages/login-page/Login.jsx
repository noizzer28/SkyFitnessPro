import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { DarkBG } from '../../App.styles'
import { FormAuth } from 'components/FormAuth/FormAuth'
import { setUser } from 'store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Login = () => {
  const [loginError, setLoginError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async (email, password) => {
    console.log(process.env.MY_API_KEY)

    try {
      if (!email) {
        setLoginError('Введите email')
        return
      }

      if (!password) {
        setLoginError('Введите пароль')
      }
      const auth = getAuth()

      await signInWithEmailAndPassword(auth, email, password).then(
        ({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            }),
          )
          navigate('/')
        },
      )
    } catch (error) {
      setLoginError(error.message)
    }
  }

  return (
    <>
      <DarkBG>
        <FormAuth
          title={'Войти'}
          handleClick={handleLogin}
          typeLogin={true}
          loginError={loginError}
        ></FormAuth>
      </DarkBG>
    </>
  )
}
