import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Artist = ({ id, name }) => {
  return (
    <div>
      <Link to={`/albums/${id}`}>
        {name}
      </Link>
    </div>
  );};

Artist.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Artist;
