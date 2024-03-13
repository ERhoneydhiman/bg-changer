import {useState} from 'react';
import './App.css';


function App() {
  const [Color, setColor] = useState('gray');

  return (
    <div className="main" style={{backgroundColor:Color}}>
      <div className="info">
      <h1>Background Color Changer</h1>
<p>click on button to change the color.</p>
      </div>
      <div className="btns">
        
        <button id='red' onClick={() => setColor("red")}>Red</button>
        <button id='blue' onClick={() => setColor("blue")}>Blue</button>
        <button id='green' onClick={() => setColor("green")}>Green</button>
        <button id='yellow' onClick={() => setColor("yellow")}>Yellow</button>
        <button id='cyan' onClick={() => setColor("cyan")}>Cyan</button>

        
      </div>
    </div>
  );
}

export default App;
