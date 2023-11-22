import './App.css';
import { useState, useEffect } from 'react'
import BotCollection from './Components/BotCollection'

function App() {

  const [botData, setBotData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  // Creating function for get Data 
  function getData() {
    fetch('http://localhost:3001/bots')
      .then(response => response.json())
      .then(data => setBotData(data))
  }

  

  return (
    <div className='App' >
      <h1>Bot Battlr</h1>
      <BotCollection botData={botData} />
    </div>
  );
}

export default App;
