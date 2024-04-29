import { useState } from "react";
import "./styles.css";

export default function App() {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [red, setRed] = useState(125);
  const [green, setGreen] = useState(125);
  const [blue, setBlue] = useState(125);
  const [opacity, setOpacity] = useState(1);
  const [borderRadius, setBorderRadius] = useState(0);
  const [dropShadow, setDropShadow] = useState(true);

  const toggleShadow = () => {
    setDropShadow(!dropShadow);
  };

  const shadowStyle = dropShadow
    ? {
        boxShadow: `${horizontal}px ${vertical}px ${blur}px black`,
        backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`,
        borderRadius: `${borderRadius}%`
      }
    : {
        boxShadow: `inset ${horizontal}px ${vertical}px ${blur}px black`,
        backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`,
        borderRadius: `${borderRadius}%`
      };

  return (
    <div className="App">
      <div className="controls">
        <h4>Box Shadow Generator</h4>
        <label>Horizontal Length : {horizontal} px</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={horizontal}
          onChange={(e) => setHorizontal(e.target.value)}
        />
        <label>Vertical Length : {vertical} px</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={vertical}
          onChange={(e) => setVertical(e.target.value)}
        />
        <label>Blur : {blur} px</label>
        <input
          type="range"
          min="-200"
          max="200"
          value={blur}
          onChange={(e) => setBlur(e.target.value)}
        />
        <label>Red : {red}</label>
        <input
          type="range"
          min="0"
          max="225"
          value={red}
          onChange={(e) => setRed(e.target.value)}
        />
        <label>Green : {green}</label>
        <input
          type="range"
          min="0"
          max="225"
          value={green}
          onChange={(e) => setGreen(e.target.value)}
        />
        <label>Blue : {blue}</label>
        <input
          type="range"
          min="0"
          max="225"
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
        />
        <label>Opacity : {opacity}</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={(e) => setOpacity(e.target.value)}
        />
        <label>Border Radius : {borderRadius} px</label>
        <input
          type="range"
          min="0"
          max="50"
          step="0.1"
          value={borderRadius}
          onChange={(e) => setBorderRadius(e.target.value)}
        />
        <button onClick={toggleShadow}> Toggle Shadow </button>
      </div>
      <div className="output">
        <div className="box" style={shadowStyle}></div>
        <div className="details">
          <p>Shadow Style :</p>
          <pre>{JSON.stringify(shadowStyle, null, 2)}</pre>
          <p> @ Code by Michael Stamatis </p>

        </div>
      </div>
    </div>
    
  );
}
