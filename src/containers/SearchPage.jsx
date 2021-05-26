/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import ArtistList from '../components/artists/ArtistList';
import { getArtists } from '../services/musicBrainsApi';

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(false);
  }, [artists]);

  const handleSearchSubmit = async () => {
    setLoading(true);
    const artists = await getArtists(searchQuery); 
    setArtists(artists);
    setSearchQuery('');
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if(loading) return <h1>Loading...</h1>;

  return (
    <>
      <h1>This is our artists search page!!</h1>
      <input type="text" placeholder="artist search" onChange={handleInputChange} value={searchQuery}></input>
      <button onClick={handleSearchSubmit}>Search</button>
      <ArtistList artists={artists} />
    </>
  );
};

export default SearchPage;
