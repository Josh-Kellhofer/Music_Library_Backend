import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

const [entries, setEntries] = useState([{entry_number: '1', title: 'new', artist: 'You', album: 'Lovin It', release_date: '01-01-2001', genre: 'Pop'}])


  return (
    <div>
      {/* Returning function DisplayEntries from DisplayEntries.jsx We need to hand down entries from DisplayEntries.jx here utilizing props. parentEntries (or entries in const above) is now added to props in DisplayEntries.jsx*/}
     <DisplayEntries parentEntries={entries} /> 
     {/* Instantiating AddEntryForm.jsx to create table visuals (elongated boxes for input)*/}
     <AddEntryForm />
    </div>
  );
}
        

export default App;
