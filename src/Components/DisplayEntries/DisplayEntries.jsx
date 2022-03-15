

const DisplayEntries = (props) => {
  return (
    <table className='table'>
       <thead>
        <tr>
          {/* What you see in Table visually */}
          <th><h5>Entry Number</h5></th>
          <th><h5>Title</h5></th>
          <th><h5>Artist</h5></th>
          <th><h5>Album</h5></th>
          <th><h5>Release Date</h5></th>
          <th><h5>Genre</h5></th>
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