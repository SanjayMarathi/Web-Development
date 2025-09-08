import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const apiUrl = 'https://v2.jokeapi.dev/joke/Programming';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    console.log(data.joke);
    res.json(data);
  } catch (error) {
    console.error('Error fetching joke:', error);
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
