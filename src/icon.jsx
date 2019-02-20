import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ qaSelector, src, className }) => 
    <svg>
        <use src={src}/>
    </svg>

Icon.propTypes = {
    qaSelector: PropTypes.string,
    className: PropTypes.string,
    src: PropTypes.string.isRequired
};

Icon.defaultProps = {
    qaSelector: '',
    className: '',
};

export default Icon;