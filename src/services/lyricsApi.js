export const getLyrics = async () => {
    // needs artist name and title of song in args
    const response = await fetch('https://api.lyrics.ovh/v1/Bob+Marley/Soul+Almighty');
    const result = await response.json()
    console.log("getLyrics", result)
    return result;

}