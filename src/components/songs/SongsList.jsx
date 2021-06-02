import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';

const SongList = ({ songs }) => {

  return (
    <ul aria-label="songs list">
      {songs.map((song) => (
        <li key={song.id}>
          <Song {...song} />
        </li> 
      ))}
    </ul>
  );
};

SongList.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      releaseDate: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  )
};

export default SongList;
