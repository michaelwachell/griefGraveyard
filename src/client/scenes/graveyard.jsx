import React from "react";
import ReactDOM from "react-dom";
import "aframe";
import "aframe-extras";
import { Entity, Scene } from "aframe-react";
import "aframe-environment-component";
import Attr from "../utilities/attributes";
const { setAttributes } = Attr;

export default class Graveyard extends React.Component {
  constructor(props) {
    super(props);
    this.myScene = React.createRef();
    this.state = {
      graves: [],
      nextX: 4,
      nextY: 4,
      nextZ: 4
    };
  }

  makeGrave() {
    let grave = document.createElement("Entity");
    const scene = document.querySelector('a-canvas');
    const attribs = {
      geometry:{primitive: "box"},
      width: "2",
      height: "4",
      position: `${this.nextX} ${this.nextY} ${this.nextZ}`,
      color:"black"
    };
    setAttributes(grave, attribs);
    // scene.appendChild(grave);

    this.setState(state => {
      return { nextX: state.nextX + 2, nextZ: state.nextZ + 2 };
    });
    this.state.graves.push(grave)
    console.log('doinks', this.state)
    
  }

  render() {
    return (
      <a-scene light="defaultLightsEnabled: true"       id="myScene" >
      {this.state.graves}
        <Entity
          geometry={{ primitive: "sphere" }}
          radius="100"
          position="10 10 10"
          material={{ color: "red" }}
          class="shape"
        />
        {/* <a-entity environment="preset: osiris; grid: none; lighting: ambient;" /> */}
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
      
       
        <a-camera fly look-controls wasd-controls="fly: true; enable: true;">
          <a-entity
            raycaster="showLine: true; objects: collides"
            position="0 -0.9 0"
            rotation="0 0 0"
          />
          <a-cursor />
        </a-camera>
      </a-scene>
    );
  }
}
