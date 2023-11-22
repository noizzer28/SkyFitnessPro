import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { DarkBG } from '../../App.styles'
import { FormAuth } from 'components/FormAuth/FormAuth'
import { setUser } from 'store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
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
      <DarkBG />
      <FormAuth
        title={'Зарегистрироваться'}
        handleClick={handleRegister}
        typeLogin={false}
      ></FormAuth>
    </>
  )
}
