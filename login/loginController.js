import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loginUser } from "./loginModel.js";

export const loginController = (loginForm) => {
  
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    submitLogin(loginForm)
  })

}

const submitLogin = async (loginForm) => {
  
  const { username, password } = getLoginData(loginForm);
  try {
    dispatchEvent('startLoginUser', null, loginForm)
    const jwt = await loginUser(username, password)
    dispatchEvent('userLoged',{
        type: "success",
        message: 'Login correcto',
      }, loginForm)
    localStorage.setItem('token', jwt);
    setTimeout(() => {window.location = './index.html'},2000)
  } catch (error) {
    dispatchEvent('userLoged',{
        type: "error",
        message: 'Login incorrecto',
      }, loginForm)
  } finally {
    dispatchEvent('finishLoginUser', null, loginForm);
  }
}

const getLoginData = (loginForm) => {
  const formData = new FormData(loginForm);
  const username = formData.get('username');
  const password = formData.get('password');

  return {
    username: username,
    password: password
  }
}