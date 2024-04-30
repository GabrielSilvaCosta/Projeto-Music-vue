import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCMN7pNpQuoqL-UuzL6K2K_spGDGEFDZZE',
  authDomain: 'music-1f1c3.firebaseapp.com',
  projectId: 'music-1f1c3',
  storageBucket: 'music-1f1c3.appspot.com',
  appId: '1:500584173567:web:68bd2011fa78c5fa4b21ca'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')
const commentsCollection = db.collection('comments')

export { auth, db, usersCollection, songsCollection, storage, commentsCollection }
