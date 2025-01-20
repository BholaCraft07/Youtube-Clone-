
// const Api_Key = import.meta.env.YT_API_KEY; 
const Api_Key = 'AIzaSyB1Nl6-7fyekuInfGp2AkxUxPzfZbw3Hgg'; 
const BASE_URL = 'https://www.googleapis.com/youtube/v3';


// Function to fetch data and store it in localStorage
const fetchData = async (endpoint, params={}) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      params: {
        ...params,
        key: Api_Key,
      }
      });
      const data=await response.json();
    console.log(data)
    return data;
  } catch (e) {
    console.error('Error fetching data:', e.message);
    throw e;
  }
};

export default fetchData;
