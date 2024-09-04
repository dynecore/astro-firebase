import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from './Init'

const auth = getAuth(app)

const fakeAuth = { token: 777 }

export const Login = (...args) => {
  console.log(...args, fakeAuth)
}

export const Register = (...args) => {
  console.log(...args, fakeAuth)
}

onAuthStateChanged(auth, async (_user) => {
})
