
import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import 'aframe-extras';
import {Entity, Scene} from 'aframe-react';
import 'aframe-star-system-component';



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

componentDidMount() { 
 
console.log('app mounted')


}

upDown(e) {
    if(event.key == 'Spacebar'){
        console.log('space')
        this.setState({camY: state.camY +=.1})      }
      else if (e.key == 'Shift') {
          console.log('shift')
          this.setState({camY: state.camY -=.1})
      }
    }




spin(e)
 {
    document.querySelectorAll('.shape').forEach(ele => {
        console.log(ele)
        ele.emit('spin');
    })

 }
    render() {
        return (
            <>We Have React
        <Scene id="space" stars="iterations: 100" >
        <Entity geometry={{primitive: 'sphere'}} position="0 8 -5" radius="100" material={{color: 'white'}} class="shape" >
        </Entity>
        <Entity geometry={{primitive: 'sphere'}} position="0 4 -5" radius="100" material={{color: 'white'}} class="shape" >
</Entity>
            <a-sky color="black"></a-sky>
            <a-entity star-system></a-entity>

            <a-camera fly look-controls wasd-controls="fly: true; enable: true;">
            <a-cursor>
                </a-cursor>
            </a-camera>
          </Scene>
          </>)
    };
};


export default App


// <a-box onClick={(e)=> this.spin(e) } id="box" position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" class="shape" >
// <a-animation attribute="rotation"
// dur="1000"
// fill="forwards"
// to="0 360 10"
// repeat="1"
// begin="spin"
// ></a-animation>
// </a-box>

//    {this.randomSphere()}

// <a-cylinder onClick={(e)=> this.fire(e)} position="1 0.75 -3" radius="0.5" height="25" class="shape"  color="#FFC65D">
// <a-animation attribute="rotation"
// dur="1000"
// fill="forwards"
// to="0 360 10"
// repeat="1"
// begin="spin"
// ></a-animation></a-cylinder>
// <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4">
// </a-plane>