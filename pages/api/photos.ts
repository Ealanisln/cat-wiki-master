import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const breedId = req.query.breedId as string; // Get the breed ID from the query parameter

    const response = await axios.get('/images/search', {
      baseURL: 'https://api.thecatapi.com/v1',
      headers: {
        'x-api-key': process.env.API_CAT_KEY, // Replace with your actual API key
      },
      params: {
        limit: 10,
        breed_ids: breedId,
      },
    });
    


    const images = response.data;

    res.status(200).json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
