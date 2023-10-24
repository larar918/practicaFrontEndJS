import { getAds } from "./adListModel.js";
import { buildAd, emptyAds } from "./adListView.js";
import { dispatchEvent } from "../utils/dispatchEvent.js"

export const adListController = async (adList) => {
  adList.innerHTML = '';
  let ads = [];

  try {
    dispatchEvent('startLoadingAds', null, adList);
    ads = await getAds();
  } catch (error) {
    dispatchEvent('adsLoaded',{
      type: "error",
      message: 'Error cargando anuncios',
    },adList);
  }
  finally {
    dispatchEvent('finishLoadingAds', null, adList);
  }

  if (ads.length === 0) {
    adList.innerHTML = emptyAds();
  } else {
    renderAds(ads, adList);
  }
  
}

const renderAds = (ads, adList) => {
  ads.forEach(ad => {
    const adContainer = document.createElement('div');
    adContainer.classList.add('ad');
    adContainer.innerHTML = buildAd(ad);
    adList.appendChild(adContainer)
  })
}