import { loginController } from "./loginController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { loaderController } from '../loader/loaderController.js';

const loader = document.querySelector('#loader');
const { show, hide } = loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#login');
  const notificationsSection = document.querySelector('#notifications');
  const showNotification = notificationsController(notificationsSection);

  loginForm.addEventListener('startLoginUser', () => {
    show();
  });
  loginForm.addEventListener('finishLoginUser', () => {
    hide();
  });

  loginForm.addEventListener('userLoged', (event) => {
    showNotification(event.detail.message, event.detail.type)
  });

  loginController(loginForm);
})