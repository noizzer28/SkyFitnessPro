import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
// import { getDatabase, ref, onValue } from 'firebase/database'

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

// получаем список курсов
// const db = getDatabase()
// let data = {}
// export async function getCourses() {
//   const starCountRef = ref(db, '/courses')
//   await onValue(starCountRef, (snapshot) => {
//     data = snapshot.val()
//   })
//   return data
// }
