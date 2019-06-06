import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCAozClEavF_jEB8R4gB_o7ckfqr1u902M",
  authDomain: "fir-todo-bb5fa.firebaseapp.com",
  databaseURL: "https://fir-todo-bb5fa.firebaseio.com",
  projectId: "fir-todo-bb5fa",
  storageBucket: "",
  messagingSenderId: "24330942456",
  appId: "1:24330942456:web:ef5f30373418348f"
}
firebase.initializeApp(firebaseConfig)

export default firebase
