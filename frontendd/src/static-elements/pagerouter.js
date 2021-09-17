import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//pages
import Home from '../pages/home'
import Weather from "../pages/weather";
import Cryptos from '../pages/cryptos'
import CryptoDetails from "../pages/cryptosdetails";


function PageRouter() {
    return (
        <Router>
			<Route exact path="/" component={Home} />
			<Route exact path="/weather" component={Weather} />
			<Route exact path="/cryptos" component={Cryptos} />
			<Route exact path ="/cryptos/:id" component={CryptoDetails } />
		</Router>
    )
}

export default PageRouter;