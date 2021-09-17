const express = require("express");
// require("./mongoose.js");
// const User = require("./models/user");
const cors = require('cors');
const axios = require('axios')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post('/weather' , (req, res) => {
    let city = req.body.cityname
    const apikey = 'e07b291785207b5575a4ffc1db8ceac3'
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +  "&appid=" + apikey;

    axios.get(url).then( (response)=> {
        console.log(response)
        res.send( response.data)
    }).catch((e)=>{
        console.log(e) 
        res.send(e)
    })
})

app.get('/cryptos', (req , res)=> {
    const url = 'https://www.cryptingup.com/api/assets'

    axios.get(url).then( (response) =>{

        res.send(response.data.assets)
    }).catch ( e => res.send(e))
} )


app.get('/cryptos/:id' , (req, res) => {
    
    const url = "https://www.cryptingup.com/api/assets/" + req.params.id

    axios.get(url).then( (response) => {
        console.log(response.data.asset)
        res.send(response.data.asset)
    }).catch( e => res.send(e))
    
})

app.listen(port, () => {
	console.log("Server up on port: " + port);
});