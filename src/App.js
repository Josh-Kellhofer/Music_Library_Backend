import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries'


function App() {

const [entries, setEntries] = useState([{entry_number: '1', title: 'new', artist: 'You', album: 'Lovin It', release_date: '01-01-2001', genre: 'Pop'}])

// const [title, setTitle] = useState([{}]) //state variables for form
// const [artist, setArtist] = useState([]) //state variables for form
// const [album, setAlbum] = useState([]) //state variables for form
// const [releasedate, setReleaseDate] = useState([]) //state variables for form
// const [genre, setGenre] = useState([]) //state variables for form


  return (
    <div>
      {/* Returning function DisplayEntries from DisplayEntries.jsx We need to hand down entries from DisplayEntries.jx here utilizing props. parentEntries (or entries in const above) is now added to props in DisplayEntries.jsx*/}
     <DisplayEntries parentEntries={entries} /> 
    </div>
  );
}
        

export default App;
