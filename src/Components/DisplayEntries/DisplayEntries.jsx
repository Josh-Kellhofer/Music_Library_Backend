

const DisplayEntries = (props) => {
  return (
    <table>
       <thead>
        <tr>
          {/* What you see in Table visually */}
          <th>Entry Number</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
       </thead>
       <tbody>
         {/* Telling the body to map over each entry, which is instantiated in <td> below. parentEntries refers to App.js conversion from line 19; this is to pass down info*/}
         {props.parentEntries.map((entry, index) => { 
           return (
             <tr>
               {/* Mapping over table and placing directly beneath <thead> which has visual text of each entry */}
               <td>{index +1}</td>
               <td>{entry.title}</td>
               <td>{entry.artist}</td>
               <td>{entry.album}</td>
               <td>{entry.release_date}</td>
               <td>{entry.genre}</td>
             </tr>
           );
         })}
       </tbody>
     </table>
    );
}
 
export default DisplayEntries;