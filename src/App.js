import React, { useState } from 'react';

import { ChromePicker } from 'react-color';
import './App.css';

function App() {
  const [color, setColor] = useState('#fff')
  const [showColorPicker, setShowColorPicker] = useState(false)
  return (
    <div className="container">
      <button className="color_button"
        onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? 'Close color picker' : 'pick a color'}
      </button>

      {showColorPicker && (

        <ChromePicker color={color} onChange={updatedColor => setColor(updatedColor.hex)}></ChromePicker>

      )}
      <h1>your color is {color}</h1>

      {/* finish everyting,just have to likedup to my portfolio */}


      <h2>Created by <a className="portfolio_link" href="#">Naim Hossen</a></h2>
    </div>
  );
}

export default App;
