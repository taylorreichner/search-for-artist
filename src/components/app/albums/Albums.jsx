import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Albums = ({ id, releaseId, onArtistClick }) => {
  return (
    <>
      <Link to={`/albums/album/${id}`}>
        <p onClick={onArtistClick}>{}</p>
      </Link>  
    </>
  );
};

Albums.propTypes = {
  id: PropTypes.string.isRequired,
  releaseId: PropTypes.string.isRequired,
  onArtistClick: PropTypes.func.isRequired,

}