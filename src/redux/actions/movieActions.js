import { getBatmanMoviesPending, getBatmanMoviesSuccess, getBatmanMoviesError } from ".";

const getBatmanMovies = () => {
    return dispatch => {
        dispatch(getBatmanMoviesPending());
        fetch(process.env.REACT_APP_TV_MAZE_API_URL_BASE + "search/shows?q=batman")
            .then(response => response.json())
            .then(movies => {
                if (movies.error) {
                    throw (movies.error);
                }
                dispatch(getBatmanMoviesSuccess(movies));
                return movies;
            })
            .catch(error => {
                dispatch(getBatmanMoviesError(error));
            })
    }
}

export default getBatmanMovies;