import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

const auth = getAuth()
// авторизация пользователя
export async function login({ email, pass }) {
  const authData = await signInWithEmailAndPassword(auth, email, pass)
  return authData.user
}

// регистрация пользователя
export async function registration({ email, pass }) {
  const regData = await createUserWithEmailAndPassword(auth, email, pass)
  return regData.user
}
