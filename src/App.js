import React, { useEffect, useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import './App.css';
import axios from 'axios';


function App() {

  const [entries, setEntries] = useState([]);

  // function sendEntry(){
  //   let entry = {
  //     'title': 'Axios Style',
  //     'album': 'Finding Axios',
  //     'artist': 'Dev',
  //     'release_date': '2022-03-16',
  //     'genre': 'Coding',
  //    }
  //    console.log(entry)
  //    createEntry(entry)
  // }

  useEffect(() => {
    getAllEntries();
  }, [])

  async function getAllEntries(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setEntries(response.data)
    console.log(response.data)
  }

  async function createEntry(createNewEntry){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', createNewEntry);
    console.log(response.data)
    if(response.status === 201)
      await getAllEntries();
    
  }

  async function updateEntry(entryData, entryId){
    let response = await axios.put(`http://127.0.0.1:8000/api/music/${entryId}`, entryData)
  }
    // return (
    //   <div className="App">
    //     <button onClick={() => sendEntry()}>Submit</button>
    //   </div>
    // );


// Creating function to pass information up from child (AddEntryFrom, line 20) to parent (App) so the add button adds to the app (entries inputted)
  // function addNewEntry(entry) {
  // let tempEntries = [...entries, entry];
  // Calling the whisperer (setEntries) and passing in tempEntries (an arrey with new entry; ... takes everything inside array to place in new array, not nested)
  // setEntries(tempEntries);
// }

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
            <AddEntryForm createEntry={createEntry}/>
            {/* <button type='submit' className='btn btn-primary' style={{'margin-top': '1em'}} onClick={() => sendEntry}>Add A Song</button> */}
            </div>
          </div>
        </div>
      </div>
          </div>
          );
        }
              
      export default App;
          
      


      
