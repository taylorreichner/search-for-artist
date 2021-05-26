import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const Album = ({ releaseId, date, title }) => {
  const { artist } = useParams();

  return (
    <>
      <Link to={`/artist/${artist}/songs/${releaseId}`}>
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
