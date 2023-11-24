import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const auth = getAuth()
// авторизация пользователя

export async function login({ email, pass }) {
  console.log('login')
  const authData = await signInWithEmailAndPassword(auth, email, pass)
  return authData.user
}

export async function registration({ email, pass }) {
  console.log('registration')
  const regData = await createUserWithEmailAndPassword(auth, email, pass)
  return regData.user
}
