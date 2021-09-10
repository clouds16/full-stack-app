import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//pages
import Home from '../pages/home'
import Weather from "../pages/weather";
import Cryptos from '../pages/cryptos'



function PageRouter() {
    return (
        <Router>
			<Route exact path="/" component={Home} />
			<Route path="/weather" component={Weather} />
			<Route path="/cryptos" component={Cryptos} />
		</Router>
    )
}

export default PageRouter;