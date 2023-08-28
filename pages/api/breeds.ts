import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios('/breeds', {
      baseURL: 'https://api.thecatapi.com/v1',
      headers: {
        'x-api-key': process.env.API_CAT_KEY, // Replace with your actual API key
      },
    });

    const breeds = response.data;

    res.status(200).json({ results: breeds });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
