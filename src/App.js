import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import './App.css';
import axios from 'axios';
// import EntriesChartTracker from './Components/EntriesChartTracker/EntriesChartTracker';


function App() {

const [entries, setEntries] = useState([{entry_number: '1', title: 'new', artist: 'You', album: 'Lovin It', releaseDate: '01-01-2001', genre: 'Pop'}])

// Creating function to pass information up from child (AddEntryFrom, line 20) to parent (App) so the add button adds to the app (entries inputted)
function addNewEntry(entry) {
  let tempEntries = [...entries, entry];
  // Calling the whisperer (setEntries) and passing in tempEntries (an arrey with new entry; ... takes everything inside array to place in new array, not nested)
  setEntries(tempEntries);
}

  return (
    // <div><h3>MUSIC LIST</h3></div>
    
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-6'>
         <div className='border-box'>
          <DisplayEntries parentEntries={entries} /> 
         </div>
         <div><h3>ADD SONG TO LIST</h3></div>
         <div className='border-box'>
           <div className='col-md-6'>
         {/* Instantiating AddEntryForm.jsx to create table visuals (elongated boxes for input). Also calling function addNewEntry with catcher variable*/}
          <AddEntryForm addNewEntryProperty={addNewEntry}/>
          </div>
        </div>
      </div>
    </div>
        </div>
         
    


    
  );
}
        

export default App;
