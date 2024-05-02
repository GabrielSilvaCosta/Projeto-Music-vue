import { setActivePinia, createPinia } from 'pinia'
import useUserStore from '@/stores/user'

vi.mock('@/includes/firebase', () => ({
  auth: {
    signInWithEmailAndPassword: () => Promise.resolve({ user: true })
  },
  usersCollection: {}
}))

describe('stores', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('authenticates user', async () => {
    const store = useUserStore()

    expect(store.isLoggedIn).not.toBe(true)

    await store.authenticate({})

    expect(store.isLoggedIn).toBe(true)
  })
})
