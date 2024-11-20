// src/MovieCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const MovieCard = ({ movie, onDetailsClick }) => {
    return (
        <Card sx={{ maxWidth: 345, margin: 2, borderRadius: '10px', boxShadow: 3 }}>
            <CardMedia
                component="img"
                height="200"
                image={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/400"}
                alt={movie.Title}
                style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" style={{ color: '#2C3E50' }}>
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Release Year: {movie.Year}
                </Typography>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => onDetailsClick(movie.imdbID)}
                    style={{ marginTop: '10px' }}
                >
                    Details
                </Button>
            </CardContent>
        </Card>
    );
};

export default MovieCard;