
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import 'aframe-extras';
import {Entity, Scene} from 'aframe-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpaceJam from './scenes/spaceJam.jsx';
import Graveyard from './scenes/graveyard.jsx';


const Space = () => <h2>Space Floaty - Enter VR </h2>;

class App extends React.Component {

constructor(props) {
    super(props)
    this.state = {
        stars: [],
        camX: 0,
        camY: 0,
        camZ: 0

    }
}

    render() {
        return (
        
            <Router>
                <>
            <div>
            <Link to="/space"> Space Floater </Link>
            </div>
            <div>
            <Link to="/graveyard">Grief Leaver</Link>
            </div>

            <Route path="/space" component={SpaceJam}/>
            <Route path="/graveyard" component={Graveyard}/>

            </>
            </Router>

        )
    };
};


export default App


