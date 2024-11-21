# Movie Search Web Application

## Overview
This is a full-stack movie search web application that allows users to search for movies by title and view details such as the movie poster, release year, rating, and plot. The application is built using React.js for the frontend and Node.js/Express for the backend.

## Technologies Used
- **Frontend:**
  - React.js
  - Axios
  - Bootstrap or Material-UI
  - React Router (optional)

- **Backend:**
  - Node.js
  - Express.js
  - OMDb API (or any free movie API)

## Features
- Search for movies by title.
- Display movie details including title, poster, release year, rating, and plot.
- Responsive user interface.
- Error handling for API requests.

## Getting Started
### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd movie-search-app

  Install dependencies for the backend:
   
     cd backend
   
    npm install

  Install dependencies for the frontend:
    
    cd ../frontend
    
    npm install

Backend
  Navigate to the backend directory:

    cd backend

Start the server:
    npm start

The backend will run on http://localhost:5000 (or another port if configured).

Frontend
  Open a new terminal window and navigate to the frontend directory:

    cd frontend

Start the React application:

    npm start

The frontend will run on http://localhost:3000.

API Key Configuration (if required)
If you are using an external API like OMDb, you may need to set up an API key. Create a .env file in the backend directory and add your API key:

    OMDB_API_KEY=your_api_key_here
