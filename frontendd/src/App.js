import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'


function App() {

  let [weather , setWeather] = useState('No Weather Yet')

  function getWeather(){
    axios.post("/" ).then(res=> {
      console.log(res)
    })

    
  }


  return (
    <div>
      <button onClick={getWeather}> Get Weather </button>
      <h1> The weather is currently: {weather}</h1>
    </div>
  )
}

export default App;
