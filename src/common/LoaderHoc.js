import React from 'react';
import { Loader } from '../components';

const LoaderHOC = (Component) => {
    const LoaderComponent = ({ isLoading, ...props }) => {
        if (!isLoading) return <Component {...props} />;
        return <Loader />;
    }
    return LoaderComponent;
}

export default LoaderHOC;