const express = require("express");
// require("./mongoose.js");
// const User = require("./models/user");
const cors = require('cors');
const axios = require('axios')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/data', (req, res) =>{
    const key = 'e07b291785207b5575a4ffc1db8ceac3';
    //  api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let url =   "https://api.darksky.net/forecast/90cdda4c36fb9e5ea8b786c7034713f9/37.8267,-122.4233";
    axios.get(url).then( (response)=>{
        console.log(response.data.currently)
        const temperature = JSON.parse(response.data.currently['temperature'])
        const currently = response.data.currently
        res.send( {currently} )

    }).catch(e => res.send(e))
})

app.post('/weather' , (req, res) => {
    
    let city = req.body.cityname
    const apikey = 'e07b291785207b5575a4ffc1db8ceac3'
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +  "&appid=" + apikey;

    axios.get(url).then( (response)=> {
        let temperature = response.data.main.temp
        res.send({temperature})

    }).catch((e)=>{
        console.log(e)
        res.send(e)
    })

})


app.listen(port, () => {
	console.log("Server up on port: " + port);
});