import axios from 'axios'
import {useState} from 'react'


function Weather() {

  let [temperature , setTemperature] = useState('No data yet')
  let [country, setCountry] = useState('')
  let [city, setCity] = useState('City')
 

  function getData(e) {
    axios({
      method: 'post',
      url: '/weather',
      data: {
        cityname : city
      }
    }).then( (res) =>{
      setTemperature(res.data.main.temp - 273)
      setCountry(res.data.sys.country)
      

    } ).catch( (err) => console.log(err))
    e.preventDefault()
  }

  function cityTextChange(e){
    setCity(e.target.value)
  }


  return (
    <div className='section weather'>
      <div className='container'>
        <h1> City : {city}</h1>
        <h2> Temperature: {temperature} , {city} {country}  </h2>
        
        

        <form  onSubmit={getData}>
          <input type='text' value={city}  onChange={cityTextChange} placeholder="Los Angeles"/>
          <input type='submit' value="Submit"/> 
        </form>
      
      </div> 
    </div> )
}

export default Weather;
