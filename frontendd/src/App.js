import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {

  let [weather , setWeather] = useState('No data yet')


  function getData() {
    axios.get('/data').then( (response) =>{

      console.log(response.data.temp)

      setWeather(response.data.temp)
    } ).catch( (e) => console.log(e))

  }


  return (
    <div>
        
        <h2> This is the data : {weather} </h2>
        <button onClick={getData}> Click me to get data</button>
    
    </div> )
}

export default App;
