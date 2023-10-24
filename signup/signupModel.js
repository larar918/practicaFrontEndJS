export const createUser = async (username, password) => {
    const url = "http://localhost:8000/auth/register";
  
    const body = {
      username: username,
      password: password,
    }
  
    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json'
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
  };