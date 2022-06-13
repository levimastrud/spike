import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import './Details.css';

function Details() {

    // Basic imports
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    // Genres is where we store the value we click. It is only capable of holding one
    // movie at a time.

    const genres = useSelector(store => store.genres);
    let currentMovie = genres[0];
    let movieId = params.movieId;

    // With this useEffect we are able to get the details of the movie using our
    // URL parameter. That means we can refresh as many times as we want and our
    // content won't budge!

    useEffect(() => {
        dispatch({
            type: 'DETAIL_MOVIE',
            payload: movieId
        })
    }, []);

    // Without this if-statement we would get errors because starting on line 45 we would be
    // digging into an object that doesn't exist.

    if (genres.length === 0) {
        return (
            <>
                <h2>Loading ...</h2>
                <button onClick={() => history.push('/')}>Back</button>
            </>
        )
    }


    return (
        <>
            <div className='wrapper'>
                <div className='details'>
                    <h1 className='titlebg'>{currentMovie.title}</h1>
                    <h1 className='title'>{currentMovie.title}</h1>
                    {/* The genres are in an array, so if there are multiple
                    we want it to look good. I just used the join function
                    to separate every item with a comma and space.  VV*/}
                    <h3 className='genre'>{currentMovie.genre.join(", ")}</h3>
                    <h3 className='description'>{currentMovie.description}</h3>
                    <img src={currentMovie.poster} className='image'></img>
                    <button className = 'button' onClick={() => history.push('/')}>Back</button>
                </div>
            </div>
        </>
    )
}

export default Details;