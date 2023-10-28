export const buildAd = (ad) => {
    let adTemplate = `
    <div">
        <h4>${ad.name}</h4>
        <p class="info">${ad.photo}</p>
        <p class="info">${ad.description}</p>
        <p class="info">${ad.price}€</p>
        <p class="info">${ad.transaction}</p>
    </div>`
    return adTemplate;
  }

