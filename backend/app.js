const express = require("express");
// require("./mongoose.js");
// const User = require("./models/user");
const cors = require('cors');
const request = require('request')

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());



app.post("/", (req, res) => {
    let url = "https://api.darksky.net/forecast/90cdda4c36fb9e5ea8b786c7034713f9/37.8267,-122.4233";
    request(url , (err, res , body ) => {
        if (!err) {
            res.send(body);
            console.log(body)
        }
    })


})


app.listen(port, () => {
	console.log("Server up on port: " + port);
});