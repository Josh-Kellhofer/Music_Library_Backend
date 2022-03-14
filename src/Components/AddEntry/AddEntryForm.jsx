import React, { useState } from 'react';


const AddEntryForm = (props) => {

  const [title, setTitle] = useState([]); //state variables for form
  const [artist, setArtist] = useState([]); //state variables for form
  const [album, setAlbum] = useState([]); //state variables for form
  const [releaseDate, setReleaseDate] = useState([]); //state variables for form
  const [genre, setGenre] = useState([]); //state variables for form

  //Prevents browser from refreshing and allows inputted entries to be saved to console
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
    // Calling the App.js function AddNewEntry from App return line 22 AddEntryForm
    props.addNewEntryProperty(newEntry)
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
        <input type='date' className='form-control' value ={releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/> 
       </div> 
     <div className='form-group'>
      <label>Genre</label>
        <input type='text' className='form-control' value={genre} onChange={(event) => setGenre(event.target.value)} />
       </div> 
      <button type='submit' class='btn btn-primary' style={{'margin-top': '1em'}}>Add A Song</button>
    </form>
   );
}
 
export default AddEntryForm;
      
      
       
      
      