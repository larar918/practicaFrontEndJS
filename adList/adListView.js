export const buildAd = (ad) => {
  const transactionType = ad.transaction === 'purchase' ? 'Compra' : 'Venta';

    return `
      <a href="./adDetail.html?id=${ad.id}">
        <h4>${ad.name}</h4>
        <p class="info">${ad.photo}</p>
        <p class="info">${ad.description}</p>
        <p class="info">${ad.price}€</p>
        <p class="info">${transactionType}</p>
      </a>
  `;
  }
  
  export const emptyAds = () => {
    return `<h3>No hay anuncios disponibles.</h3>`
  }
