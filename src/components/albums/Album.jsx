import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Album = ({ releaseId, date, title }) => {
  return (
    <>
      <Link to={`/songs/${releaseId}`}>
        <p>{title}</p>
        <p>{date}</p>
      </Link>  
    </>
  );
};

Album.propTypes = {
  releaseId: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

};

export default Album;
