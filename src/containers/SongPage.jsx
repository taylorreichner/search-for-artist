/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { getSongsByAlbum } from '../services/musicBrainsApi';
import { useParams } from 'react-router-dom';
import SongList from '../components/songs/SongsList';



function SongPage() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { releaseId } = useParams();

  useEffect(() => {
    getSongsByAlbum(releaseId)
      .then(setSongs)
      .finally(() => setLoading(false));

  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <SongList songs={songs} />
    </>
  );
}

export default SongPage;
