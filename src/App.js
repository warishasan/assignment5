import React from 'react';
import './App.css';
import Parent from './parent.js'
import context from './context.js'

function App() {

  let stateData = React.useState(0)
  return (

    <context.Provider value = {stateData}>
    <div className="App">
     <Parent> </Parent>
    </div>
    </context.Provider>
  );
}

export default App;
