// App.js
import React, { useState, useEffect } from 'react';

function App({ apiUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchData(apiUrl);
    }, [apiUrl]);

    const fetchData = async (apiUrl) => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setMovies(data.results);
            console.log(selectedApiUrl[menu]);
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    };

    const movieCards = movies.map((movie) => (
        <div className="card" style={{ width: '18rem' }} id="container">
            <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="Card image cap"
            ></img>
            <div className="card-body" id="body">
                <h5 className="card-title" id="title">
                    {movie.title}
                </h5>
                <p className="card-text" id="overview">
                    {movie.overview}
                </p>
            </div>
            <ul className="list-group list-group-flush" id="release">
                <li className="list-group-item">Release date: {movie.release_date}</li>
                <li className="list-group-item">Vote average: {movie.vote_average}</li>
            </ul>
            <div className="card-body">
                <a
                    href={`https://www.themoviedb.org/movie/${movie.id}`}
                    className="card-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="link"
                >
                    View on TMDb
                </a>
            </div>
        </div>
    ));

    return <div className="grid-container">{movieCards}</div>;
}

export default App;
