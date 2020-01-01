import React from 'react';
import { connect } from 'react-redux';
import getBatmanMovies from '../redux/actions/movieActions';
import { bindActionCreators } from 'redux';
import { getMovies, getMoviesLoading, getMoviesError } from '../redux/reducers/movieReducer';
import { withRouter } from 'react-router-dom';

class Movie extends React.Component {

    componentDidMount = () => {
        if (!this.props.movies)
            this.props.getBatmanMovies();
    }

    render() {
        const { id } = this.props.match.params;
        const { loading, movies, error } = this.props;
        const movie = movies ? movies.find(movie => { return movie.show.id == id }) : null;
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        return (
            <div>
                {movie &&
                    <div className="movie-container">
                        <div className="movie-poster">
                            <img src={movie.show.image.medium} className="poster-large" />
                        </div>
                        <div className="movie-details">
                            <span className="movie-title">{movie.show.name}</span>
                            <span className="movie-description">
                                {movie.show.summary.replace(/(<([^>]+)>)/ig, "")}
                            </span>
                            <span className="movie-language">Language: {movie.show.language}</span>
                            <span className="movie-genres">Genres: {movie.show.genres.map(genre => genre + ", ")}</span>
                            <span className="movie-update-date">Updated date: {new Date(movie.show.updated).toLocaleDateString('en-US', dateOptions)}</span>
                        </div>
                        {/* {JSON.stringify(movie.show)} */}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: getMoviesLoading(state),
    movies: getMovies(state),
    error: getMoviesError(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getBatmanMovies
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Movie))