import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Landing from '../Landing/Landing';
import Bottom from '../Bottom/Bottom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    // First we prop in the temporary variable we used to map through the movie list
    // and use it to get the id of the movie we want more information about. We also 
    // history . push to a different page.

    const movieDetails = (movie) => {
        dispatch({
            type: 'DETAIL_MOVIE',
            payload: movie.id
        })
        history.push(`/details/${movie.id}`);
    }

    // Fetches all the movies in our database immediately upon load

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Landing/>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img onClick={() => movieDetails(movie)} src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
            <Bottom/>
        </main>

    );
}

export default MovieList;