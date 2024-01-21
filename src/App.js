import React from 'react';
import mdata from "./mdata.jsx";

import Card from "./Components/Cards";

function App() {
  console.log(mdata[0].sname)
  return (
    <>
    <div className = "heading">
    <h1>List Of Marvel Movies</h1>
    </div>
    {mdata.map((val) => {
      return (
      <Card src={val.src} 
      title={val.title} 
      sname={val.sname} 
      href={val.href} />
      );
    })}

    </>
  )
}

export default App
