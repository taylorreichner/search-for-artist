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


  return (
    <>
      {loading ? <h1>loading...</h1>
        : <section>{lyrics.lyrics}</section> }
    </>
  );
};

export default LyricPage;
