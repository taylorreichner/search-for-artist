import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const Song = ({ title, releaseDate }) => {
  const { artist } = useParams();

  return (
    <>
      <Link to={`/artist/${artist}/title/${title}`} >
        <p>{title}</p>
        <p>{releaseDate}</p>
      </Link>
    </>
  );
};

Song.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
};

export default Song;
