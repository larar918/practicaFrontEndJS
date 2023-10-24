import { notificationsController } from "./notifications/notificationsController.js";
import { adListController } from "./adList/adListController.js";
import { sessionController } from "./session/sessionController.js";
import { loaderController } from "./loader/loaderController.js";

const notificationsSection = document.getElementById('notifications');
const showNotification = notificationsController(notificationsSection);
const loader = document.getElementById('loader');
const { show, hide } =  loaderController(loader);

document.addEventListener('DOMContentLoaded', () => {
  const adList = document.getElementById('ads');
  const session = document.getElementById('session');
  
  adList.addEventListener('adsLoaded', (event) => {
    showNotification(event.detail.message, event.detail.type)
  })
  
  adList.addEventListener('startLoadingAds', () => {
    show();
  })
  adList.addEventListener('finishLoadingAds', () => {
    hide();
  })

  adListController(adList);
  sessionController(session);
  
})

window.addEventListener('offline', () => {
  showNotification('Se ha perdido la conexión', 'error');
})