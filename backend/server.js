// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Endpoint to fetch movies based on title
app.get('/api/movies', async (req, res) => {
  const { title } = req.query; // Get movie title from query parameters
  try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${title}&apikey=${process.env.OMDB_API_KEY}`);
      if (response.data.Response === 'False') {
          return res.status(404).json({ error: response.data.Error });
      }
      res.json(response.data); // Send the movie data back to the frontend
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data from OMDb API' });
  }
});

// Endpoint to fetch specific movie details by ID
app.get('/api/movie', async (req, res) => {
  const { id } = req.query; // Get movie ID from query parameters
  try {
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`);
      if (response.data.Response === 'False') {
          return res.status(404).json({ error: response.data.Error });
      }
      res.json(response.data); // Send the movie details back to the frontend
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data from OMDb API' });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});