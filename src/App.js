import React, { useState } from 'react';


function App() {

const [entries, setEntries] = useState([{id: 1, Title: 'new', Artist: 'You', Album: 'Lovin It', Release_Date: '01-01-2001', Genre: 'Pop'}])

// const [title, setTitle] = useState([{}]) //state variables for form
// const [artist, setArtist] = useState([]) //state variables for form
// const [album, setAlbum] = useState([]) //state variables for form
// const [releasedate, setReleaseDate] = useState([]) //state variables for form
// const [genre, setGenre] = useState([]) //state variables for form


  return (
    <div>
     <table>
       <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>1</td>
           <td>1</td>
           <td>1</td>
           <td>1</td>
           <td>1</td>
         </tr>
       </tbody>
     </table>
    </div>
  );
}
        

export default App;
