export const editAd = async (adId,name,photo,description,price,transaction) => {
    const url = `http://localhost:8000/api/ads/${adId}?_expand=user`;
    const token = localStorage.getItem('token');
    const body = {
        name:name,
        photo:photo,
        description:description,
        price:price,
        transaction:transaction
      }
    
    let response;
    try {
      response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(body),
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