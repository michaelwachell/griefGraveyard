
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import 'aframe-extras';
import {Entity, Scene} from 'aframe-react';
import 'aframe-star-system-component';




class SpaceJam extends React.Component {

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
    <Scene id="space" stars="iterations: 100" planets="iterations: 3">
       <Entity geometry={{primitive: 'sphere'}}  radius="100" position="10 10 10" material={{color: 'red'}} class="shape" >
          </Entity>
            <Entity geometry={{primitive: 'sphere'}} position="0 4 -5" collider-check radius="100" material={{color: 'yellow'}} class="shape" >
            </Entity>
                <a-sky color="black"></a-sky>
                <a-entity star-system></a-entity>
                <a-camera  fly look-controls wasd-controls="fly: true; enable: true;">
                    <a-entity raycaster="showLine: true; objects: .collides" position="0 -0.9 0" rotation="0 0 0"></a-entity>
                <a-cursor>
                </a-cursor>
            </a-camera>
    </Scene>
</>)
    };
};


export default SpaceJam

