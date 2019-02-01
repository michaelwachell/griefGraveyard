
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import 'aframe-extras';
import {Entity, Scene} from 'aframe-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SpaceJam from './scenes/spaceJam.jsx';
import Graveyard from './scenes/graveyard.jsx';


const Space = () => <h2>Space Floaty - Enter VR </h2>;

class Menu extends React.Component {

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
        
     
                <>
                <Space/>
            <div>
            <Link to="/space"> Space Floater </Link>
            </div>
            <div>
            <Link to="/graveyard">Grief Leaver</Link>
            </div>

                    </>
         

        )
    };
};


export default Menu


