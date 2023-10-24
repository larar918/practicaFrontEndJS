import { createUser } from "./signupModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const signupController = (signupForm) => {
  signupForm.addEventListener("submit", (event) => validateForm(event, signupForm));
}

const validateForm = async (event, signupForm) => {
  event.preventDefault();

  const username = signupForm.querySelector('#username');
  const password = signupForm.querySelector('#password');
  const passwordConfirmation = signupForm.querySelector('#password-confirmation');
 
  try {
    if (isPasswordValid(password, passwordConfirmation)) {
      dispatchEvent('startSignUp', null, signupForm);
      await createUser(username.value, password.value);
      dispatchEvent('userCreated', {
        type: "success",
        message: 'Usuario creado correctamente',
      }, signupForm)}
      setTimeout(() => {window.location = './index.html';},2000);
    }
  catch (error) {
    dispatchEvent('userCreated', {
      type: "error",
      message: error,
    }, signupForm)
  }
  finally {
    dispatchEvent('finishSignUp', null, signupForm);
  }
}

const isPasswordValid = (password, passwordConfirmation) => {
    let result = true
  if (password.value !== passwordConfirmation.value) {
    throw 'Las contraseñas no coinciden';
  }
  return result
}

