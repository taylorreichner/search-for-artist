/* eslint-disable max-len */
export const getLyrics = async (artist, title) => {
  // needs artist name and title of song in args
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
  const result = await response.json();
  return result;
};
