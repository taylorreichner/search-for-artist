/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlbumsList from '../components/albums/AlbumsList';
import { getAlbumsByArtist } from '../services/musicBrainsApi';


function AlbumPage() {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getAlbumsByArtist(id)
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
