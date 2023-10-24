import { adDetailController } from "./adDetailController.js";
import { notificationsController } from "../notifications/notificationsController.js";
import { loaderController } from "../loader/loaderController.js";

const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const adId = params.get("id");

  const notifications = document.querySelector("#notifications");
  const showNotification = notificationsController(notifications);

  const adDetail = document.querySelector('#adDetail');

  adDetail.addEventListener('adLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type);
  })

  adDetail.addEventListener('startAdDetail', () => {
    show();
  })
  adDetail.addEventListener('finishAdDetail', () => {
    hide();
  })

  adDetailController(adDetail, adId);

})