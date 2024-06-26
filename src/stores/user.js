import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country
      })

      await userCred.user.updateProfile({
        displayName: values.name
      })

      this.isLoggedIn = true
    },
    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password)
      this.isLoggedIn = true
    },
    async signOut() {
      await auth.signOut()
      this.isLoggedIn = false
    }
  }
})
