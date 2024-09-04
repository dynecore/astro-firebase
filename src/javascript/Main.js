import { checkUser, DemoLogin } from '../firebase/Auth'

const Main = () => {
  DemoLogin()
  checkUser()
}

export default Main
