import { movieConstants } from '../_constants';

const getBatmanMoviesPending = () => {
    return {
        type: movieConstants.MOVIES_PENDING
    }
}

const getBatmanMoviesSuccess = movies => {
    return {
        type: movieConstants.MOVIES_SUCCESS,
        movies
    }
}

const getBatmanMoviesError = error => {
    return {
        type: movieConstants.MOVIES_ERROR,
        error
    }
}

export {
    getBatmanMoviesPending,
    getBatmanMoviesSuccess,
    getBatmanMoviesError
}