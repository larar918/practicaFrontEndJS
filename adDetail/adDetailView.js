export const buildAd = (ad) => {
    let adTemplate = `
    <p>${ad.name}</p>
    <p>${ad.photo}</p>
    <p>${ad.description}</p>
    <p>${ad.price}</p>
    <p>${ad.transaction}</p>
    `;
  
    return adTemplate;
  }

