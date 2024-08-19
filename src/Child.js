import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


function Child({ onChangeColor, color }) {
  function handleClick(){
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  
  return <div className="child" 
  style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
