/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import ArtistList from '../components/artists/ArtistList';
import { getArtists } from '../services/musicBrainsApi';

const SearchPage = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const didMount = useRef(false);

  useEffect(() => {
    setLoading(false);
    if(didMount.current){
      getArtists(searchQuery, (page * 25))
        .then(setArtists)
        .finally(() => setLoading(false));
    
    } else didMount.current = true;
    
  }, [page]);

  const handleSearchSubmit = async () => {
    setLoading(true);
    const artists = await getArtists(searchQuery, page); 
    setArtists(artists);
    
    setLoading(false);
   
  };


  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
   
  };

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
      <h1>This is our artists search page!!</h1>
      <label htmlFor="artist">artist</label>
      <input id="artist" type="text" placeholder="artist search" onChange={handleInputChange} value={searchQuery}></input>
      <button aria-label="find-artist" onClick={handleSearchSubmit}>Search</button>
      <button disabled={page === 0} onClick={handlePrevClick}>prev</button>
      <button disabled={artists.length < 25} onClick={handleNextClick}>next</button>
      <span>{page + 1}</span>
      <ArtistList artists={artists} />
    </>
  );
};

export default SearchPage;
