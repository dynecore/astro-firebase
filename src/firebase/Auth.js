import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from './Init'

const auth = getAuth(app)

export const Login = async () => {
  const userCredentials = await signInWithEmailAndPassword(auth, 'hello@world.com', 'password123')
  console.log(userCredentials)
}

export const DemoLogin = async () => {
  try {
    await signInWithEmailAndPassword(auth, 'hello@world.com', 'Password333')
  } catch (error) {
    console.log(error.code)
  }
}

export const Register = (...args) => {
  console.log(...args)
}

export const Logout = () => {
  signOut(auth)
}

export const checkUser = async () => {
  console.log('checking demo success')
  await onAuthStateChanged(auth, async (_user) => {
    if (_user) {
      const params = new URLSearchParams({
        uid: '12345',
        user: _user.email
      })

      fetch(`http://localhost:3000/chkusr?${params}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error))
    } else {
      console.log('no user')
    }
  })
}
