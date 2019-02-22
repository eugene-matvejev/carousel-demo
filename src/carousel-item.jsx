import React from 'react';
import PropTypes from 'prop-types';

const CarouselItem = ({ src, position, tags, qaSelector }) =>
    <div data-cy={qaSelector} className="carousel-item">
        <div
            data-cy={qaSelector}
            className="carousel-item__image"
            style={{
                backgroundImage: `url("${src}")`,
            }}
        >
            {position}
        </div>
        <span data-cy={`${qaSelector}tags`} className="carousel-item__tags">{tags}</span>
    </div>;

CarouselItem.propTypes = {
    qaSelector: PropTypes.string,
    src: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
}

CarouselItem.defaultProps = {
    qaSelector: '',
}

export default CarouselItem;
