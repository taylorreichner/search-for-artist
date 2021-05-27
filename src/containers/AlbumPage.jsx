/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AlbumsList from '../components/albums/AlbumsList';
import { getAlbumsByArtist } from '../services/musicBrainsApi';


function AlbumPage() {
  const [loading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);
  const [page, setPage] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getAlbumsByArtist(id, (page * 25))
      .then(setAlbums)
      .finally(() => setLoading(false));
  }, [page]);

  const handlePrevClick = async () => {
    if(page > 0) {
      setPage(page => page - 1);
    } 
    else return;
    
  };
  const handleNextClick = async () => {
    if(page >= 0){
      setPage(page => page + 1);
    } 

    else return;
    
  };


  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <button disabled={page === 0} onClick={handlePrevClick}>prev</button>
      <button disabled={albums.length < 25} onClick={handleNextClick}>next</button>
      <span>{page + 1}</span>
      <AlbumsList albums={albums}/>
    </>
  );
}

export default AlbumPage;
