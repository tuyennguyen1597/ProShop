import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>
        {value >= 1 ? (
          <i className='fas fa-star' style={{ color: color }}></i>
        ) : value >= 0.5 ? (
          <i className='fas fa-star-half-alt' style={{ color: color }}></i>
        ) : (
          <i className='far fa-star' style={{ color: color }}></i>
        )}
      </span>
      <span>
        {value >= 2 ? (
          <i className='fas fa-star' style={{ color: color }}></i>
        ) : value >= 1.5 ? (
          <i className='fas fa-star-half-alt' style={{ color: color }}></i>
        ) : (
          <i className='fas fa-star' style={{ color: color }}></i>
        )}
      </span>
      <span>
        {value >= 3 ? (
          <i className='fas fa-star' style={{ color: color }}></i>
        ) : value >= 2.5 ? (
          <i className='fas fa-star-half-alt' style={{ color: color }}></i>
        ) : (
          <i className='far fa-star' style={{ color: color }}></i>
        )}
      </span>
      <span>
        {value >= 4 ? (
          <i className='fas fa-star' style={{ color: color }}></i>
        ) : value >= 3.5 ? (
          <i className='fas fa-star-half-alt' style={{ color: color }}></i>
        ) : (
          <i className='far fa-star' style={{ color: color }}></i>
        )}
      </span>
      <span>
        {value >= 5 ? (
          <i className='fas fa-star' style={{ color: color }}></i>
        ) : value >= 4.5 ? (
          <i className='fas fa-star-half-alt' style={{ color: color }}></i>
        ) : (
          <i className='far fa-star' style={{ color: color }}></i>
        )}
      </span>
      <span> {text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: '#FFCC00',
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default Rating;
