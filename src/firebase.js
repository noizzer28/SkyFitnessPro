import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENFER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,

  //   apiKey: 'AIzaSyB-wRQxSLi02iluYOtQb3MIYHHKzhUfkMA',
  //   authDomain: 'fitness-pro-ae1f4.firebaseapp.com',
  //   databaseURL:
  //     'https://fitness-pro-ae1f4-default-rtdb.europe-west1.firebasedatabase.app',
  //   projectId: 'fitness-pro-ae1f4',
  //   storageBucket: 'fitness-pro-ae1f4.appspot.com',
  //   messagingSenderId: '1034773898251',
  //   appId: '1:1034773898251:web:7dfa7ec88e44363287d30e',
}

export const app = initializeApp(firebaseConfig)
