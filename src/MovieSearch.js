// src/MovieSearch.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const MovieSearch = ({ onSearchResults }) => {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const searchMovies = async () => {
        setError('');
        try {
            const response = await axios.get(`http://localhost:5000/api/movies?title=${title}`);
            if (response.data.Error) {
                setError(response.data.Error);
                onSearchResults([]);
            } else {
                onSearchResults(response.data.Search);
            }
        } catch (err) {
            setError('Failed to fetch data');
        }
    };

    return (
        <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <Typography variant="h3" component="h1" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                Movie Search App
            </Typography>
            <TextField 
                label="Search Movies" 
                variant="outlined" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                style={{ marginRight: '10px', width: '300px' }} // Adjust width as needed
            />
            <Button variant="contained" color="primary" onClick={searchMovies}>
                Search
            </Button>
            {error && <Typography color="error" style={{ marginTop: '10px' }}>{error}</Typography>}
        </Box>
    );
};

export default MovieSearch;