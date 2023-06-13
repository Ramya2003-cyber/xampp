import React, { useState, useEffect } from 'react';



function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const response = await fetch(
                'https://api.themoviedb.org/3/movie/popular?api_key=5dfa2b837073b6d0cbf1bd2aed4faed3'
            );
            const data = await response.json();
            setMovies(data.results);
        }
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        console.log({movie.title});

                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h2 class="movie-title">{movie.title}</h2>
                        <p >{movie.overview}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
ReactDOM.render(<MovieList/>, document.getElementById('root'));


export default MovieList;

