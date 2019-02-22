import React from "react";
import ReactDOM from "react-dom";
import "aframe";
import "aframe-extras";
import { Entity, Scene } from "aframe-react";
import "aframe-environment-component";
import Attr from "../utilities/attributes";
const { setAttributes } = Attr;
import Grave from '../components/entities/Grave';

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
      <Scene light={{ defaultLightsEnabled: true }} id="myScene">
      {this.state.graves.map((g, i)=> {
         const {width, height,position, x, y ,z,color, klass } = g;
         console.log (width, height,position, x, y ,z,color, klass, 'GGGGGGG')
        return (<Grave width={width} height={height} position={position} x={x} y={y} z={z} color={color} klass={klass} key={i} />)
      })}

<a-entity text="value: Hello World;"></a-entity>
        <Entity
          geometry={{ primitive: "sphere" }}
          radius="100"
          position="10 10 10"
          material={{ color: "red" }}
          class="shape"
        />
        <Entity
          geometry={{ primitive: "sphere" }}
          position="0 4 -5"
          collider-check
          radius="100"
          material={{ color: "yellow" }}
          class="shape"
        />
        <a-plane
          position="0 0 -4"
          rotation="-90 0 0"
          width="150"
          height="150"
          color="#999999"
        />
        <a-box
          position="0 2 -10"
          width="5"
          height="7"
          color="black"
          onClick={() => this.makeGrave()}
        />
        <a-camera fly look-controls wasd-controls="fly: false; enable: true;">
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
