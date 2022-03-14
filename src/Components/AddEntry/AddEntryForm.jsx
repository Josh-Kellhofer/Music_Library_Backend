import React, { useState } from 'react';


const AddEntryForm = (props) => {

  const [title, setTitle] = useState([]); //state variables for form
  const [artist, setArtist] = useState([]); //state variables for form
  const [album, setAlbum] = useState([]); //state variables for form
  const [release_date, setReleaseDate] = useState([]); //state variables for form
  const [genre, setGenre] = useState([]); //state variables for form

  //Prevents browser from refreshing and allows inputted entries to be saved to console
  function handleSubmit(event) {
    event.preventDefault();
    let newEntry = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
    };
    console.log(newEntry);
    // Calling the App.js function AddNewEntry from App return line 22 AddEntryForm
    props.createEntry(newEntry)
  }

  return ( 
    <form onSubmit={handleSubmit}>
     <div className='form-group'>
      <label>Title</label>
        <input type='text' className='form-control' value={title} onChange={(event) => setTitle(event.target.value)}/>
       </div> 
     <div className='form-group'>
      <label>Artist</label>
        <input type='text' className='form-control' value={artist} onChange={(event) => setArtist(event.target.value)} />
       </div> 
     <div className='form-group'>
      <label>Album</label>
        <input type='text' className='form-control' value={album} onChange={(event) => setAlbum(event.target.value)} />
       </div> 
     <div className='form-group'>
      <label>Release Date</label>
        <input type='date' className='form-control' value ={release_date} onChange={(event) => setReleaseDate(event.target.value)}/> 
       </div> 
     <div className='form-group'>
      <label>Genre</label>
        <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)} />
       </div> 
      <button type='submit' class='btn btn-primary' style={{'margin-top': '1em'}} onClick={() => handleSubmit}>Add A Song</button>
    </form>
   );
}
 
export default AddEntryForm;
      
      
       
      
      