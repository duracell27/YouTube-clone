import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '2476cc1b37msh7dd3c78bdd550d8p172be6jsnc339d60edafc',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data
}