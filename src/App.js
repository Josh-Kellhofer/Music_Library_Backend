import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';


function App() {

const [entries, setEntries] = useState([{entry_number: '1', title: 'new', artist: 'You', album: 'Lovin It', releaseDate: '01-01-2001', genre: 'Pop'}])

// Creating function to pass information up from child (AddEntryFrom, line 20) to parent (App) so the add button adds to the app (entries inputted)
function addNewEntry(entry) {
  let tempEntries = [...entries, entry];
  // Calling the whisperer (setEntries) and passing in tempEntries (an arrey with new entry; ... takes everything inside array to place in new array, not nested)
  setEntries(tempEntries);
}

  return (
    <div>
      {/* Returning function DisplayEntries from DisplayEntries.jsx We need to hand down entries from DisplayEntries.jx here utilizing props. parentEntries (or entries in const above) is now added to props in DisplayEntries.jsx*/}
     <DisplayEntries parentEntries={entries} /> 
     {/* Instantiating AddEntryForm.jsx to create table visuals (elongated boxes for input). Also calling function addNewEntry with catcher variable*/}
     <AddEntryForm addNewEntryProperty={addNewEntry}/> 
    </div>
  );
}
        

export default App;
