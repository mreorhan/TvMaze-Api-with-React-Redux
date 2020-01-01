import React from 'react';
import PropTypes from 'prop-types';
import withApiHoc from '../common/WithApiHoc';
import { Link } from 'react-router-dom';

const MovieList = (props) => {
    const data = props.items && props.items.map((movie, index) => {
        return (
            <Link to={"/movie/" + movie.show.id} key={index}>
                <div className="movie-list">
                    <img alt={movie.show.name} src={movie.show.image.medium} className="poster-medium" />
                    <h3>{movie.show.name}</h3>
                </div>
            </Link>
        )
    })
    return <div>{data}</div>;
}

MovieList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default withApiHoc(MovieList);