import React from 'react';
import PropTypes from 'prop-types';

const MovieList = (props) => {
    return (
        <div>
            {props.items}
        </div>
    )
}

MovieList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default MovieList;