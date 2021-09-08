const express = require("express");
// require("./mongoose.js");
// const User = require("./models/user");
const cors = require('cors');
const request = require('request')

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// app.get("/" , async (req, res)=> {
// 	// res.status(200).send(console.log("Loaded successfully"))
//     res.send("Loaded Successfully")
// })

// app.post("/users", async (req, res) => {
// 	//using async await
// 	const user = new User(req.body);

// 	try {
// 		await user.save();
// 		res.status(201).send(user);
// 	} catch (e) {
// 		res.status(400).send(e);
// 	}

// });

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