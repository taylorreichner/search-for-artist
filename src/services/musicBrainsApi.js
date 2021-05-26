/* eslint-disable max-len */
export const getArtists = async (query) => {
  const response = await fetch(`http://musicbrainz.org/ws/2/artist?query=${query}&fmt=json&limit=25`);
  const result = await response.json();
  console.log('getArtist', result.artists);
  return result.artists.map((artist) => ({
    id: artist.id,
    name: artist.name,
  }));
};

export const getAlbumsByArtist = async (id) => {
  // Artist ID needs to be in parens arg
  const response = await fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`);
  const result = await response.json();
  console.log('getAlbumsByArtist', result.releases);
  return result.releases.map((album) => ({
    releaseId: album.id,
    title: album.title,
    date: album.date,
  }));
};

export const getSongsByAlbum = async () => {
  // Release ID needs to be in arg
  const response = await fetch('http://musicbrainz.org/ws/2/recording?release=869697bf-d684-4c31-894e-0e0cd27b1377&fmt=json');
  const result = await response.json();
  console.log('getSongsByAlbum', result);
  return result;
};
