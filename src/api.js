import {
  updateEmail,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
  signOut,
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

// выход из системы
export async function signOutUser() {
  signOut(auth)
    .then(() => {
      console.log('вышел')
    })
    .catch((error) => {
      console.log(error)
    })
}

export async function getUserProfile() {
  const user = auth.currentUser
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName
    const email = user.email
    const photoURL = user.photoURL
    const emailVerified = user.emailVerified

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid
    //   console.log(user);
  }
}

// export function changeLogin(newMail) {
//   updateEmail(auth.currentUser, 'user@example.com')
//     .then(() => {
//       console.log('логин изменен')
//     })
//     .catch((error) => {
//       console.log('какая то ошибка', error)
//     })
// }

export async function changePass(newPas) {
  let result = null
  const user = auth.currentUser
  await updatePassword(user, newPas)
    .then(() => {
      result = 'пароль изменен'
    })
    .catch((error) => {
      throw new Error(error)
    })
  return result
}

// firebase.auth()
//     .signInWithEmailAndPassword('you@domain.example', 'correcthorsebatterystaple')
//     .then(function(userCredential) {
//         userCredential.user.updateEmail('newyou@domain.example')
//     })
