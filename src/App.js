import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(27);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div style ={{
      backgroundImage: `url(/mountains.png)`, backgroundSize:'cover',  backgroundRepeat: 'no-repeat'
    }}>
    <p> </p>
     <h1> Counter check </h1>
     <h3> Pressed the button to Increment Count at {count}</h3>
    <button class="ml-auto" onClick={handleClick}>
      Increment
    </button>
    </div>
  );
 }

export default App;
