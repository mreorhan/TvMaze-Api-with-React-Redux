import React from 'react';
import { MovieList } from '../components';
import { connect } from 'react-redux';
import getBatmanMovies from '../redux/actions/movieActions';
import { bindActionCreators } from 'redux';
import { getMovies, getMoviesLoading, getMoviesError } from '../redux/reducers/movieReducer';

class Dashboard extends React.Component {

    componentDidMount = () => {
        const { getBatmanMovies, movies } = this.props;
        if (!movies)
            getBatmanMovies();
    }

    render() {
        const { loading, movies, error } = this.props;

        return (
            <div className="container">
                <h2>Batman Tv Shows</h2>
                {movies && <MovieList items={movies} isLoading={loading} />}
                {error && <div> Something went wrong</div>}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)