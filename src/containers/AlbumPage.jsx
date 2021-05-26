/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import AlbumsList from '../components/albums/AlbumsList';
import { getAlbumsByArtist } from '../services/musicBrainsApi';


function AlbumPage({ match }) {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAlbumsByArtist(match.params.id)
      .then(setAlbums)
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <AlbumsList albums={albums}/>
    </>
  );
}

export default AlbumPage;
