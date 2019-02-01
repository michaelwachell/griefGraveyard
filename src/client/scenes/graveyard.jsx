
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import 'aframe-extras';
import {Entity, Scene} from 'aframe-react';
import 'aframe-star-system-component';
import 'aframe-environment-component';




export default class Graveyard extends React.Component {

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
<>We Have React
    <Scene  >
       <Entity geometry={{primitive: 'sphere'}}  radius="100" position="10 10 10" material={{color: 'red'}} class="shape" >
          </Entity>
          <a-entity environment="preset: osiris; grid: none; lighting: poiint;"></a-entity>
            <Entity geometry={{primitive: 'sphere'}} position="0 4 -5" collider-check radius="100" material={{color: 'yellow'}} class="shape" >
            </Entity>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="150" height="150" color="#999999"></a-plane>
            <a-box  position="0 2 -10" width="5" height="7" color="black">                      </a-box>
                <a-camera  fly look-controls wasd-controls="fly: false; enable: true;">
                    <a-entity raycaster="showLine: true; objects: .collides" position="0 -0.9 0" rotation="0 0 0"></a-entity>
                <a-cursor>
                </a-cursor>
            </a-camera>
    </Scene>
</>)
    };
};
