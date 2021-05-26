/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import AlbumsList from '../components/app/albums/AlbumsList';
import { getAlbumsByArtist } from '../services/musicBrainsApi';


function AlbumPage({ match }) {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setLoading(false);
  }, [albums]);

  const handleArtistClick = async () => {
    setLoading(true);
    const albums = await getAlbumsByArtist(match.params.id);
    setAlbums(albums);
  };

  // const handleAlbumSelect = async () => {
  //   setAlbums();
    

  // };


  return (
    <>
      <AlbumsList onclick={handleArtistClick} albums={albums}/>
    </>
  );
}

export default AlbumPage;
