import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Nl7PqqGJuby7m5WtMo8hNLPg40dOcmc",
  authDomain: "chatgpt-clone-767f1.firebaseapp.com",
  projectId: "chatgpt-clone-767f1",
  storageBucket: "chatgpt-clone-767f1.appspot.com",
  messagingSenderId: "1044735869042",
  appId: "1:1044735869042:web:a27f8e9485ac0f18a082eb"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};