import React from 'react';
import { MovieList } from '../components';
import { connect } from 'react-redux';
import getBatmanMovies from '../redux/actions/movieActions';
import { bindActionCreators } from 'redux';
import { getMovies, getMoviesLoading, getMoviesError } from '../redux/reducers/movieReducer';

class Dashboard extends React.Component {

    componentDidMount = () => {
        this.props.getBatmanMovies();
    }

    render() {
        const { loading, movies, error } = this.props;

        return (
            <div>
                {loading && <div> Loading...</div>}
                {JSON.stringify(movies)}
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