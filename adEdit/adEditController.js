import { editAd} from "./adEditModel.js"
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const adEditController = (adEdit,adId) => {

  adEdit.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(adEdit);
      
      const adName = formData.get("name");
      const adPhoto = formData.get("photo");
      const adDescription = formData.get("description");
      const adPrice = formData.get("price");
      const adTransaction = formData.get("transaction");
     
      try {
          dispatchEvent('startEditAds', null, adEdit);
          await editAd(adId,adName,adPhoto,adDescription,adPrice,adTransaction);
          dispatchEvent('adEdited', { type: "success", message: "Anuncio editado correctamente" }, adEdit);
          setTimeout(() => {
              window.location = "index.html";
          }, 2000);
      } catch (error) {
          dispatchEvent('adEdited', { type: "error", message: "Error editando anuncio" }, adEdit);      
      }
      finally {
          dispatchEvent('finishEditAds', null, adEdit);
        }
})
}



  