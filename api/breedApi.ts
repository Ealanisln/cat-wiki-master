import axios from 'axios';

const breedApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
      'x-api-key': process.env.API_CAT_KEY, // Replace with your actual API key
    },
  });

export default breedApi;