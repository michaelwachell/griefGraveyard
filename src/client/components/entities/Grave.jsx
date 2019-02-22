import React from "react";
import { Entity } from "aframe-react";

export default class Grave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline:  "Here lies my Grief",
      message:  "and now I feel better",
      width:  "2",
      height:  "4",
      owner:  "Anonymous",
      position:  "5 5 5",
      color:  "black",
      textColor: "red",
      x:  "4",
      y:  "2",
      z:  "4",
      klass:  'grave'
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
          text={ `value: ${p.headline || s.headline}; color: white; zOffset:.55; width: 4; height: 7; xOffset:1; baseline:top; anchor: center;`}
        />

{/* <a-entity  text={ `value: ${p.message || s.message}; color: red`}
 position={`${p.x || s.x} ${p.y + 3 || s.y } ${p.z +3 || s.z}`} ></a-entity> */}

        {/* <a-entity text="width: 2; lineHeight: 50; letterSpacing: 5; color: red; value: Here Lies Greg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam" position="5 5 5" ></a-entity> */}

        {/* <a-entity text="width: 2; lineHeight: 50; letterSpacing: 5; color: red; value: Here Lies Greg Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam" position={`${p.x || s.x} ${p.y + 3 || s.y } ${p.z +3 || s.z}`} ></a-entity> */}
      </>
    );
  }
}
