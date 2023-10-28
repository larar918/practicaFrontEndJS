import { deleteAd, getAd} from "./adDetailModel.js"
import { buildAd } from "./adDetailView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { decodeToken } from "../utils/decodeToken.js";

export const adDetailController = async (adDetail, adId) => {

  try {
    dispatchEvent('startAdDetail', null, adDetail)
    const ad = await getAd(adId);
    adDetail.innerHTML = buildAd(ad);
    handleButtons(ad, adDetail);
  } catch (error) {
    dispatchEvent('adLoaded', { type: "error", message: "El anuncio no existe" }, adDetail);
    setTimeout(() => {
      //window.location = './index.html';
    }, 2000);
  }
  finally {
    dispatchEvent('finishAdDetail', null, adDetail);
  }
  
}

const handleButtons = (ad, adDetail) => {
  const token = localStorage.getItem('token');

  if (token) {
    const { userId } = decodeToken(token);

    if (userId === ad.userId) {
      addButtons(ad, adDetail);
    }
  }
}

const addButtons = (ad, adDetail) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Borrar anuncio';
  deleteButton.classList.add('submit');
  deleteButton.addEventListener('click', async () => {
    if (confirm('¿Seguro que quieres borrar el anuncio?')) {
      await deleteAd(ad.id);
      window.location = 'index.html';
    }
  })

  const editButton = document.createElement('button');
  editButton.textContent = 'Editar anuncio';
  editButton.classList.add('submit');
  editButton.addEventListener('click', async () => {
    window.location = `adEdit.html?id=${ad.id}`;
  })

  adDetail.appendChild(editButton);
  adDetail.appendChild(deleteButton);
}






