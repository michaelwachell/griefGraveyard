
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
        camZ: 0,
        css: {
            backgroundColor: "#838383",
            color: "white",
            width: "100vw",
            height: "100vw",
            
        }

    }
}

    render() {
        return (
        
     
                <>
                <div style={this.state.css}>
                <Space/>
            <div>
            <Link to="/space"> _test </Link>
            </div>
            <div>
            <Link to="/graveyard">Grief Graveyard</Link>
            </div>
            </div>

                    </>
         

        )
    };
};


export default Menu


