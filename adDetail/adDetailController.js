import { deleteAd, getAd } from "./adDetailModel.js"
import { buildAd } from "./adDetailView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js";

export const adDetailController = async (adDetail, adId) => {

  try {
    dispatchEvent('startAdDetail', null, adDetail)
    const ad = await getAd(adId);
    adDetail.innerHTML = buildAd(ad);
    handleDeleteAd(ad, adDetail);
  } catch (error) {
    dispatchEvent('adLoaded', { type: "error", message: "El anuncio no existe" }, adDetail);
    setTimeout(() => {
      window.location = './index.html';
    }, 2000);
  }
  finally {
    dispatchEvent('finishAdDetail', null, adDetail);
  }
  
}

const handleDeleteAd = (ad, adDetail) => {
  const token = localStorage.getItem('token');

  if (token) {
    const { userId } = decodeToken(token);

    if (userId === ad.userId) {
      addDeleteButton(ad, adDetail);
    }
  }
}

const addDeleteButton = (ad, adDetail) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Borrar anuncio';
  deleteButton.classList.add('submit');
  deleteButton.addEventListener('click', async () => {
    if (confirm('¿Seguro que quieres borrar el anuncio?')) {
      await deleteAd(ad.id);
      window.location = 'index.html';
    }
  })

  adDetail.appendChild(deleteButton);
}
