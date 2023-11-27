import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database'
// import { redisp } from 'pages/main-page/MainPage'

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
// export function getCoursesApi() {
//   console.log('getCourses')
//   const starCountRef = ref(db, '/courses')
//   onValue(starCountRef, (snapshot) => {
//     data = snapshot.val()
//     console.log('хоп!')
//     redisp(data)
//   })
//   return data
// }
