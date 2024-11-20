// src/App.js
import React, { useState } from 'react';
import { Container, Grid } from '@mui/material';
import MovieSearch from './MovieSearch';
import MovieCard from './MovieCard';
import MovieDetailsPopup from './MovieDetailsPopup';
import axios from 'axios';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleDetailsClick = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/movie?id=${id}`);
            setSelectedMovie(response.data);
        } catch (error) {
            console.error('Failed to fetch movie details:', error);
        }
    };

    const closePopup = () => {
        setSelectedMovie(null);
    };

    return (
        <Container maxWidth="md">
            <MovieSearch onSearchResults={setMovies} />
            <Grid container spacing={2}>
                {movies.map(movie => (
                    <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
                        <MovieCard movie={movie} onDetailsClick={handleDetailsClick} />
                    </Grid>
                ))}
            </Grid>
            <MovieDetailsPopup movie={selectedMovie} onClose={closePopup} />
        </Container>
    );
};

export default App;