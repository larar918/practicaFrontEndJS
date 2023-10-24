import { adCreationController } from "./adCreationController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { loaderController } from "../loader/loaderController.js";

const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);


const token = localStorage.getItem('token');
if (!token) {
  window.location = './index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const adCreation = document.querySelector('#adCreation');

  const notifications = document.querySelector('#notifications');
  const showNotification = notificationsController(notifications);

  adCreation.addEventListener('adCreated', (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  adCreation.addEventListener('startCreatingAds', () => {
    show();
  })
  adCreation.addEventListener('finishCreatingAds', () => {
    hide();
  })

  adCreationController(adCreation);

})