import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState(0);
  const inc = () =>
  {
    setAge(age+1);
  }
  return  <div className='App'>{age} <button onClick={inc}>Increase age</button> </div>
}



export default App;
