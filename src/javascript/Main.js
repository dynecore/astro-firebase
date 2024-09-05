import { checkUser, DemoLogin } from '../firebase/Auth'

const Main = () => {
  DemoLogin()
  // DemoRegister()
  checkUser()
}

export default Main
