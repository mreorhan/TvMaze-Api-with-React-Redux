import React from 'react';
import { Loader, Error } from '../components';

const withApiHoc = (Component) => {
    return ({ isLoading, hasError, ...props }) => {
        if (isLoading)
            return <Loader />;
        else if (hasError)
            return <Error />
        else
            return <Component {...props} />;
    }
}

export default withApiHoc;