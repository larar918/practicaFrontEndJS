const parseAd = (ad) => {
  return {
    name: ad.name,
    photo:ad.photo,
    description: ad.description,
    price: ad.price,
    transaction:ad.transaction,
    userId: ad.user.id,
    id: ad.id
  }
}

export const getAd = async (adId) => {
  const url = `http://localhost:8000/api/ads/${adId}?_expand=user`;
  let ad;

  try {
    const response = await fetch(url);
    if (response.ok) {
      ad = await response.json();
    } else {
      throw new Error('El anuncio no existe');
    }
  } catch (error) {
    throw error.message;
  }

  return parseAd(ad);
}

export const deleteAd = async (adId) => {
  const url = `http://localhost:8000/api/ads/${adId}?_expand=user`;
  const token = localStorage.getItem('token');

  let response;
  try {
    response = await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    if (error.message) {
      throw error.message;
    } else {
      throw error;
    }
  }
}

