// import { Link } from 'react-router-dom'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DarkBG } from '../../App.styles'
import { FormAuth } from 'components/FormAuth/FormAuth'

// const auth = getAuth()
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code
//     const errorMessage = error.message
//   })

export const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  return (
    <>
      <DarkBG>
        <FormAuth typeLogin={true}></FormAuth>
      </DarkBG>
    </>
  )
}
