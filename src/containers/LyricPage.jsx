/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLyrics } from '../services/lyricsApi';

const LyricPage = () => {
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState([]);
  const { artist, title } = useParams();

  useEffect(() => {
    setLoading(true);
    getLyrics(artist, title)
      .then(setLyrics)
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <ul aria-label="lyrics list">
      <li>{lyrics.lyrics}</li> 
    </ul>
  );
};

export default LyricPage;
