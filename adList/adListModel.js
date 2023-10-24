const transformAds = (ads) => {
  return ads.map(ad => ({
    name: ad.name,
    photo:ad.photo,
    description: ad.description,
    price: ad.price,
    transaction:ad.transaction,
    id: ad.id
  }))
}

export const getAds = async () => {
  const url = "http://localhost:8000/api/ads";
  let parsedAds = [];

  try {
    const response = await fetch(url);
    const ads = await response.json();
    parsedAds = transformAds(ads);
    
  } catch (error) {
    throw error;
  }
  
  return parsedAds;
}