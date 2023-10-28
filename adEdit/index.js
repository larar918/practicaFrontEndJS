import { adEditController } from "./adEditController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { loaderController } from "../loader/loaderController.js";

const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);


const token = localStorage.getItem('token');
if (!token) {
  window.location = './index.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const adId = params.get("id");

  const adCreation = document.querySelector('#adEdit');

  const notifications = document.querySelector('#notifications');
  const showNotification = notificationsController(notifications);

  adCreation.addEventListener('adEdited', (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  adCreation.addEventListener('startEditAds', () => {
    show();
  })
  adCreation.addEventListener('finishEditAds', () => {
    hide();
  })

  adEditController(adEdit,adId);

})