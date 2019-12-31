import React from 'react';
import { MovieList } from '../components';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount = () => {
        fetch(process.env.REACT_APP_TV_MAZE_API_URL_BASE + "/search/shows?q=batman")
            .then(movies => movies.json())
            .then(movies => this.setState({ movies }))
    }

    render() {
        const { movies } = this.state;
        const movieList = movies && movies.map((movie, index) => {
            return (<MovieList items={movie.show.name} />)
        })
        return (
            <div>
                {movieList}
            </div>
        )
    }
}