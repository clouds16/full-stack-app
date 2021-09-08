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
    let url =   "https://api.darksky.net/forecast/90cdda4c36fb9e5ea8b786c7034713f9/37.8267,-122.4233";
    axios.get(url).then( (response)=>{
        console.log(response.data.currently)
        const temp = JSON.parse(response.data.currently['temperature'])
        res.send( { temp })
    }).catch(e => res.send(e))
})


app.listen(port, () => {
	console.log("Server up on port: " + port);
});