import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  signOut,
} from 'firebase/auth'
import { getDatabase, ref, child, get } from 'firebase/database'
import { objArrList } from 'App'

// чтение данных о курсах
const dbRef = ref(getDatabase())
export async function getCour() {
  let dataCour
  await get(child(dbRef, `/courses`))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        const data = await snapshot.val()
        dataCour = await objArrList(data)
      } else {
        console.log('No data available')
      }
    })
    .catch((error) => {
      console.error(error)
    })
  return dataCour
}

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

// выход из системы
export async function signOutUser() {
  await signOut(auth)
    .then(() => {
      console.log('вышел')
    })
    .catch((error) => {
      console.log(error)
    })
}

// смена логина
export async function changeLogin(newMail) {
  await updateEmail(auth.currentUser, newMail)
    .then(() => {
      console.log('логин изменен')
    })
    .catch((error) => {
      throw new Error(error)
    })
  return auth.currentUser
}

// смена пароля
export async function changePass(newPas) {
  const user = auth.currentUser
  await updatePassword(user, newPas)
    .then(() => {})
    .catch((error) => {
      throw new Error(error)
    })
}
