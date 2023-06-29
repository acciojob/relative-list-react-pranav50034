import React from 'react'

const relativeList = [Pranav, Pranoti, Satyam, Saranag, Sahil, Darvesh];

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol id="relativeList">
                {
                  relativeList.map((name, index)=>{
                      return <li id={`relativeListItem${index + 1}`}>{name}</li>;
                  })
                }
               </ol>
    </div>
  )
}

export default App
 