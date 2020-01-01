import { movieConstants } from "../_constants";

//movies list
const initialState = {
    loading: false,
    movies: [],
    error: null
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case movieConstants.MOVIES_PENDING: {
            return {
                ...state,
                loading: true
            }
        }
        case movieConstants.MOVIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                movies: action
            }
        }
        case movieConstants.MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default movieReducer;

export const getMovies = state => state.movieReducer.movies;
export const getMoviesLoading = state => state.movieReducer.loading;
export const getMoviesError = state => state.movieReducer.error;