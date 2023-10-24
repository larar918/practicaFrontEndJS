import { signupController } from "./signupController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { loaderController } from "../loader/loaderController.js";

const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#signup');
  const notificationsSection = document.querySelector('#notifications');

  const showNotification = notificationsController(notificationsSection);
  signupController(signupForm);

  signupForm.addEventListener('userCreated', (event) => {
    showNotification(event.detail.message, event.detail.type)
  });

  signupForm.addEventListener('startSignUp', () => {
    show();
  })
  signupForm.addEventListener('finishSignUp', () => {
    hide();
  })

})