import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { DarkBG } from '../../App.styles'
import { FormAuth } from 'components/FormAuth/FormAuth'
import { setUser } from 'store/slices/userSlice'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Register = () => {
  const [loginError, setLoginError] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async (email, password) => {
    try {
      if (!email) {
        setLoginError('Введите email')
        return
      }

      if (!password) {
        setLoginError('Введите пароль')
      }
      const auth = getAuth()

      await createUserWithEmailAndPassword(auth, email, password).then(
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
      <DarkBG />
      <FormAuth
        title={'Зарегистрироваться'}
        handleClick={handleRegister}
        typeLogin={false}
        loginError={loginError}
      ></FormAuth>
    </>
  )
}
