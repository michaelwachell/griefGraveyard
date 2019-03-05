import React from "react";
import ReactDOM from "react-dom";
import "aframe";
import "aframe-extras";
import "aframe-particle-system-component";
import { Entity, Scene } from "aframe-react";
import "aframe-environment-component";
import 'aframe-glow';
import Attr from "../utilities/attributes";
const { setAttributes } = Attr;
import Grave from '../components/entities/Grave';
import sky from '../../../dist/assets/skys/slake.jpg';
import CrackedEarth from '../../../dist/assets/skys/cracked_earth.jpg';

export default class Graveyard extends React.Component {
  constructor(props) {
    super(props);
    this.myScene = React.createRef();
    this.state = {
      graves: [],
      nextX: 4,
      nextY: 0,
      nextZ: 4,
      boardWidth: 20,
      boardHeight: 20,
      isFull: false,
      zInc: 4,
      xInc: 3
    };
    this.initGrave = this.initGrave.bind(this);
    this.gridCalc = this.gridCalc.bind(this);
    this.makeGrave = this.makeGrave.bind(this);
  }

  makeGrave() {
    if (!this.state.isFull) {
      // let grave = document.createElement("a-box");
      // const scene = document.querySelector("#myScene");

      !this.state.graves.length ? this.initGrave() : null;

      const attribs = {
        width: 2,
        height: 4,
        position: `${this.state.nextX} ${this.state.nextY} ${this.state.nextZ}`,
        x: this.state.nextX,
        y: this.state.nextY,
        z: this.state.nextZ,
        color: "black",
        klass: "grave"
      };
      // setAttributes(grave, attribs);
      // scene.appendChild(grave);
  
      // this.setState(state => {
      //   return { nextX: state.nextX + 2, nextZ: state.nextZ + 2 };
      // });
      this.gridCalc();
      this.state.graves.push(attribs);
      // console.log("doinks", this.state);
    } else if (this.state.graves.length > 500) {
      this.setState(state => {
        return { isFull: true };
      });
    }
  }

  initGrave() {
    const w = this.state.boardWidth;
    const h = this.state.boardHeight;
    const wStart = (w / 2) * -1;
    const hStart = h / 2;

    this.setState(state => {
      return { nextX: wStart, nextZ: hStart };
    });
  }

  componentDidMount() {
    const context = this;
    // setTimeout(()=> {
    //   for (let i = 0; i< 100; i++) {
    //     context.makeGrave();
    //   }
    // },1000)

    document.querySelector("a-scene").addEventListener("loaded", function() {
      while (!context.state.isFull) {
        context.makeGrave();
      }
    });
  }

  gridCalc() {
    const xMax = this.state.boardWidth / 2;
    const xReset = xMax * -1;
    const zMin = (this.state.boardHeight / 2) * -1;
    let x;
    let z;
    if (this.state.nextZ < zMin) {
      this.setState(state => {
        return { isFull: true };
      });
    } else if (this.state.nextX > xMax) {
      this.setState(state => {
        return { nextX: xReset, nextZ: state.nextZ - this.state.zInc };
      });
    } else {
      this.setState(state => {
        return { nextX: state.nextX + this.state.xInc };
      });
    }
  }

  render() {
    return (
      <Scene id="myScene">

      <a-assets>
        <img id="sky" rotation="0 -180 0" src={sky}/>
        <img id="earth" src={CrackedEarth}/>
        <a-mixin id="light"
                 geometry="primitive: sphere; radius: .5"
                 material="color: #2F0909; emissive: #2F090s "
                 light="color: #2F0909; distance: 2; intensity: 5; type: point"></a-mixin>
       
      </a-assets>

      <a-entity environment="preset: starry; gridColor: #2F0909; lightPosition: '0 0 0';"></a-entity>
      <a-sphere glow="enabled:true; scale:1.5; color: #2F0909; c: 1d; p:1; " position="2 8 5" opacity=".1" radius=".45"></a-sphere>
      


      {this.state.graves.map((g, i)=> {
         const {width, height,position, x, y ,z,color, klass } = g;
         console.log (width, height,position, x, y ,z,color, klass, 'GGGGGGG')
        return (<Grave width={width} height={height} position={position} x={x} y={y} z={z} color={color} klass={klass} key={i} />)
      })}
                

<a-entity text="value: Hello World;"></a-entity>

        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="150"
          height="150"
          src="#earth"
          opacity="0"
          scale="2 2 2"
        />
      
        <a-camera rotation="25 0 0" position="6.758406523307709 1.6 16.62338290682799" fly look-controls wasd-controls="fly: false; enable: true;">
          <a-entity
            raycaster="showLine: true; objects: collides"
            position="0 -0.9 0"
            rotation="0 0 0"
          />
          <a-cursor />
        </a-camera>
      </Scene>
    );
  }
}
