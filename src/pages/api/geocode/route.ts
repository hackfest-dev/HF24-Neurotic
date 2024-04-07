import type { NextApiRequest, NextApiResponse } from 'next';
import { env } from '~/env';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Destructure latitude and longitude from the query parameters
  const { lat, lon } = req.query;

  // Replace with your actual API key
  const apiKey = env.REVERSE_GEO;

  // Build the API URL with query parameters
  const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&format=json&apiKey=${apiKey}`;

  try {
    // Make the fetch request
    const response = await fetch(url);

    // Check for successful response
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    // Parse JSON data
    const data = await response.json();

    // Send the data as JSON response
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching geocode data' });
  }
}
