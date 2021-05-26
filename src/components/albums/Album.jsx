/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const Album = ({ releaseId, date, title }) => {
  const { artist } = useParams();

  const addDefaultSrc = (e) => {
    e.target.src = 'https://www.placecage.com/300/300';
  };

  return (
    <>
      <Link to={`/artist/${artist}/songs/${releaseId}`}>
        <img style={{ width: '300px' }} src={`http://coverartarchive.org/release/${releaseId}/front`} alt={`${title}`} onError={addDefaultSrc} />
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
