import React from 'react';
import PropTypes from 'prop-types';

const CaruselItem = ({ src, position, tags, qaSelector }) =>
    <div data-cy={qaSelector} className="carusel-item">
        <div
            data-cy={qaSelector}
            className="carusel-item__image"
            style={{
                backgroundImage: `url("${src}")`,
            }}
        >
            {position}
        </div>
        <span data-cy={`${qaSelector}tags`} className="carusel-item__tags">{tags}</span>
    </div>;

CaruselItem.propTypes = {
    qaSelector: PropTypes.string,
    src: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

CaruselItem.defaultProps = {
    qaSelector: '',
}

export default CaruselItem;
