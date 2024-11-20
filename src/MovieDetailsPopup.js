// src/MovieDetailsPopup.js
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const MovieDetailsPopup = ({ movie, onClose }) => {
    if (!movie) return null; // Don't render if no movie is selected

    return (
        <Dialog open={Boolean(movie)} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle style={{ backgroundColor: '#FF5733', color: '#FFFFFF' }}>
                <Typography variant="h6">{movie.Title}</Typography>
            </DialogTitle>
            <DialogContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img 
                    src={movie.Poster} 
                    alt={movie.Title} 
                    style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }} 
                />
                <Typography variant="body1" style={{ marginTop: '16px' }}>
                    <strong>Year:</strong> {movie.Year}
                </Typography>
                <Typography variant="body1">
                    <strong>Rating:</strong> {movie.Rated}
                </Typography>
                <Typography variant="body1">
                    <strong>Runtime:</strong> {movie.Runtime}
                </Typography>
                <Typography variant="body1">
                    <strong>Genre:</strong> {movie.Genre}
                </Typography>
                <Typography variant="body1">
                    <strong>Director:</strong> {movie.Director}
                </Typography>
                <Typography variant="body1">
                    <strong>Actors:</strong> {movie.Actors}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '8px' }}>
                    <strong>Plot:</strong> {movie.Plot}
                </Typography>
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
                <Button onClick={onClose} color="primary" variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default MovieDetailsPopup;