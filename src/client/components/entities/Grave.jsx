import React from "react";
import { Entity } from "aframe-react";

export default class Grave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: "Goodbye Daisy you were the best dog ever",
      message:
        "We are the Dead. Short days ago We lived, felt dawn, saw sunset glow, Loved and were loved, and now we lie In Flanders fields.",
      width: "1.5",
      height: "4",
      owner: "Anonymous",
      position: "5 5 5",
      color: "black",
      textColor: "red",
      x: "4",
      y: "2",
      z: "4",
      klass: "grave"
    };
  }

  render() {
    const p = this.props || props;
    const s = this.state;
    return (
      <>
        <a-box
          width={p.width || s.width}
          height={p.height || s.height}
          color={p.color || s.color}
          position={`${p.x || s.x} ${p.y || s.y} ${p.z || s.z}`}
          key={p.key}
          opacity=".5"
          // text={ `value: ${p.headline || s.headline}; color: white; zOffset:.55; width: 5a; height: 7; xOffset:1; baseline:top; anchor: center;`}
        >
          <a-animation
            attribute="position"
            dur="5000"
            from={`${p.x || s.x} ${p.y - 5 || s.y - 5} ${p.z || s.z}`}
            to={`${p.x || s.x} ${p.y || s.y} ${p.z || s.z}`}
          />
          
        </a-box>

        <a-entity
          text={`value: ${p.headline ||
            s.headline}; color:#e1e0e8;width:1.99;letterSpacing:0.41;wrapCount:26.23;side:double;opacity:0.88; tabSize: 4.34; whiteSpace: pre; align: center; alphaTest: -0.01;`}
          position={`${p.x || s.x} ${p.y + 3 || s.y} ${p.z + 0.5 || s.z}`}
        >
           <a-animation
            attribute="position"
            dur="5000"
            from={`${p.x || s.x} ${p.y -2 || s.y} ${p.z + 0.5 || s.z}`}
            to={`${p.x || s.x} ${p.y + 3 || s.y} ${p.z + 0.5 || s.z}`}
          />
        </a-entity>

        <a-entity
          text={`value: ${p.message ||
            s.message};  color: #ff3439; width: 1.76; height: -0.5; lineHeight: 51.26; tabSize: 4.34; whiteSpace: pre; align: center; alphaTest: -0.01; side: double; wrapCount: 17.84; letterSpacing: -0.09`}
          position={`${p.x || s.x} ${p.y + 1.5 || s.y} ${p.z + 0.5 || s.z}`}
        >
   <a-animation
            attribute="position"
            dur="5000"
            from={`${p.x || s.x} ${p.y -3.5|| s.y} ${p.z + 0.5 || s.z}`}
            to={`${p.x || s.x} ${p.y + 1.5 || s.y} ${p.z + 0.5 || s.z}`}
          />
        </a-entity>

        {/* <a-entity text="width: 2; lineHeight: 50; letterSpacing: 5; color: red; value: Here Lies Greg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam" position="5 5 5" ></a-entity> */}

        {/* <a-entity text="width: 2; lineHeight: 50; letterSpacing: 5; color: red; value: Here Lies Greg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam" position={`${p.x || s.x} ${p.y + 3 || s.y } ${p.z +3 || s.z}`} ></a-entity> */}
      </>
    );
  }
}
