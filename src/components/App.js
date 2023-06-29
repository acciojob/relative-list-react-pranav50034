import React from 'react'

const relativeList = ["relative1","relative2","relative3","relative4","relative5","relative6","relative7"]

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={relativeList}>
                {
                  relativeList.map((relative, index)=>{
                      return(
                        <li key={relative}>{relative}</li>
                      )
                  })
                }
               </ol>
    </div>
  )
}

export default App
