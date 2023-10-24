import { createAd } from "./adCreationModel.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";

export const adCreationController = (adCreation) => {

    adCreation.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(adCreation);
        
        const adName = formData.get("name");
        const adPhoto = formData.get("photo");
        const adDescription = formData.get("description");
        const adPrice = formData.get("price");
        const adTransaction = formData.get("transaction");
       
        try {
            dispatchEvent('startCreatingAds', null, adCreation);
            await createAd(adName,adPhoto,adDescription,adPrice,adTransaction);
            dispatchEvent('adCreated', { type: "success", message: "Anuncio creado correctamente" }, adCreation);
            setTimeout(() => {
                window.location = "index.html";
            }, 2000);
        } catch (error) {
            dispatchEvent('adCreated', { type: "error", message: "Error creando anuncio" }, adCreation);      
        }
        finally {
            dispatchEvent('finishCreatingAds', null, adCreation);
          }
  })
}

