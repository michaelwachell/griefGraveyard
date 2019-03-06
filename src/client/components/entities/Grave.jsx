import React from "react";
import { Entity } from "aframe-react";

export default class Grave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: "My Dad",
      message:
        "We arde the Dead. Short days ago We lived, felt dawn, saw sunset glow, Loved and were loved, and now we lie In Flanders fields.",
      width: "1.5",
      height: "4",
      owner: "Anonymous",
      position: "5 5 5",
      color: "black",
      textColor: "yellow",
      titleTextColor: "#87ceeb",
      x: "4",
      y: "2",
      z: "4",
      klass: "grave",
      raiseTime: 4000
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
            dur={`${p.raiseTime || s.raiseTime}`}
            from={`${p.x || s.x} ${p.y - 5 || s.y - 5} ${p.z || s.z}`}
            to={`${p.x || s.x} ${p.y || s.y} ${p.z || s.z}`}
          />
          
        </a-box>

        <a-entity class="show-me"
          text={`value: ${p.headline ||
            s.headline}; color:${p.titleTextColor || s.titleTextColor};width:5.5;letterSpacing:3.33;wrapCount:26.23;side:double;opacity:0.88;tabSize:4.34;whiteSpace:pre;align:center;alphaTest:-0.01" position="10.83792 3.51 10.51`}
          position={`${p.x || s.x} ${p.y + 3 || s.y} ${p.z + 0.5 || s.z}`}
        >


{/* <a-image src="https://i.imgur.com/qsRbF.png" material="opacity:0.71" width=".8" geometry="width:1.71;height:0" height=".45" position="0.048 1.6951 1.02238"><a-animation attribute="position" dur="4000" from="-10 -2 10" to="-10 1 10"></a-animation></a-image> */}
       

           <a-animation
            attribute="position"
            dur={`${p.raiseTime || s.raiseTime}`}
            from={`${p.x || s.x} ${p.y -2 || s.y} ${p.z + 0.5 || s.z}`}
            to={`${p.x || s.x} ${p.y + 3 || s.y} ${p.z + 0.5 || s.z}`}
          />
        </a-entity>

        <a-entity class="show-me"
          text={`value: ${p.message ||
            s.message};  color: ${p.textColor || s.textColor}; color:white;width:1.6;height:-0.84;lineHeight:51.48;tabSize:4.34;whiteSpace:pre;alphaTest:-0.01;side:double;wrapCount:21.56;letterSpacing:-0.09`}
          position={`${p.x +.5 || s.x+.5} ${p.y + 1.5 || s.y} ${p.z + 0.5 || s.z}`}
        >
   <a-animation
            attribute="position"
            dur={`${p.raiseTime || s.raiseTime}`}
            from={`${p.x || s.x} ${p.y -3.5|| s.y} ${p.z + 0.5 || s.z}`}
            to={`${p.x || s.x} ${p.y + 1.5 || s.y} ${p.z + 0.5 || s.z}`}
          />
        </a-entity>

       { p.image && <a-image src={p.image} width="1.6" height=".8" opacity=".8" position={`${p.x || s.x} ${p.y || s.y} ${p.z || s.z}`}>
        <a-animation
            attribute="position"
            dur={`${p.raiseTime || s.raiseTime}`}
            from={`${p.x || s.x} ${p.y -2 || s.y} ${p.z || s.z}`}
            to={`${p.x || s.x} ${p.y + 5 || s.y} ${p.z  || s.z}`}
          />
                <a-animation
            attribute="opacity"
            dur="12000"
            from="0"
            to=".9"
          />
        </a-image>}
}
      </>
    );
  }
}

{/* <a-entity text="value:Daisey;color:#e1e0e8;width:6.16;letterSpacing:3.33;wrapCount:26.23;side:double;opacity:0.88;tabSize:4.34;whiteSpace:pre;align:center;alphaTest:-0.01" position="10.83792 3.51 10.51"><a-animation attribute="position" dur="5000" from="11 -2 10.5" to="11 3 10.5"></a-animation></a-entity> */}
{/* <a-entity text="value:We are the Dead. Short days ago We lived, felt dawn, saw sunset glow, Loved and were loved, and now we lie In Flanders fields.;color:white;width:1.6;height:-0.84;lineHeight:51.48;tabSize:4.34;whiteSpace:pre;alphaTest:-0.01;side:double;wrapCount:21.56;letterSpacing:-0.09" position="10.91336 1.72987 10.5"><a-animation attribute="position" dur="5000" from="11 -3.5 10.5" to="11 1.5 10.5"></a-animation></a-entity> */}