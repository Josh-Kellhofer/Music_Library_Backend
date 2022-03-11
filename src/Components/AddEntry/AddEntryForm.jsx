import React, { useState } from 'react';


const AddEntryForm = (props) => {

  const [title, setTitle] = useState([]); //state variables for form
  const [artist, setArtist] = useState([]); //state variables for form
  const [album, setAlbum] = useState([]); //state variables for form
  const [releaseDate, setReleaseDate] = useState([]); //state variables for form
  const [genre, setGenre] = useState([]); //state variables for form

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      title: title,
      artist: artist,
      album: album,
      releaseDate: releaseDate,
      genre: genre,
    };
    console.log(newEntry);
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label>Title</label>
        <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
      <label>Artist</label>
        <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} /> 
      <label>Album</label>
        <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)} />
      <label>Release Date</label>
        <input type='date' value ={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/> 
      <label>Genre</label>
        <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)} />
      <button type='submit'>Add</button>
    </form>
   );
}
 
export default AddEntryForm;