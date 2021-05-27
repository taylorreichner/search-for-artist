import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';

const AlbumsList = ({ albums }) => {
  return (
    <ul aria-label="album list">
      {albums.map((album) => {
        return <li key={album.releaseId}>
          <Album {...album} />
        </li>;
      })}
    </ul>
  );
};

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      releaseId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  )
};

export default AlbumsList;
