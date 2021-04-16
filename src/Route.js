import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import backgroundImage from './images/background.jpg';
import NavBar from './components/NavBar';

import Home from './components/Home';
import Qualification from './components/Qualification';
import Experience from './components/Experience';
import Contact from './components/ContactMe';


function RouteConfig() {
    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '625px',
        }}>
            <Router>
                <NavBar />
                {/* <Home /> */}
                {/* <div></div> */}
                
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/qualification" component={Qualification} />
                    <Route exact path="/experience" component={Experience} />
                    <Route path="/contact" component={Contact} />
                    <Route path="*" component={() => <h2 style={{ color: '#FFF' }}>404 Not Found</h2>} />
                </Switch>
                
            </Router>
        </div>
    );
}

export default RouteConfig;