import logo from './logo.svg';
import './App.css';
import Button from './Components/button';
import { useState } from 'react';


function App() {
  const [cnt,setCount]=useState(0);
  const minus =-1;
  const plus=+1;
  return (
    <div className="App">
      <Button icon={minus} cnt={cnt} setCount={setCount}></Button>
      {cnt}
      <Button icon={plus} cnt={cnt} setCount={setCount}></Button>
    </div>
  );
}

export default App;
