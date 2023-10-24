export const buildAd = (ad) => {
    return `
      <a href="./adDetail.html?id=${ad.id}">
        <p>${ad.name}</p>
        <p>${ad.photo}</p>
        <p>${ad.description}</p>
        <p>${ad.price}</p>
        <p>${ad.transaction}</p>
      </a>
  `;
  }
  
  export const emptyAds = () => {
    return `<h3>No hay anuncios disponibles.</h3>`
  }
