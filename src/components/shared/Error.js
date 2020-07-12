import React from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return ( 
        <div className="alert alert-danger col-md-6 colxs-12 text-center" role="alert">
            {message}
        </div>
     );
}

Error.propTypes = {
    message: PropTypes.string
};

export default Error;