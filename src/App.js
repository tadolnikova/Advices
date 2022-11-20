import { useEffect, useState } from 'react';
import './App.css';
import image from './11.webp';



function App() {
  const [advice, setAdvice] = useState("");

useEffect(() => {
getAdvice();
}, [])


  const getAdvice = async () =>{
    const response = await fetch (`https://www.boredapi.com/api/activity/ `)
    const data = await response.json()
    setAdvice(data.activity)
}




  return (
    <div className='App'>
      <h1>Are you bored?</h1>
      <img src={image}  alt="tips" width="400px" />
    <h2>{advice}</h2>
    <button onClick={getAdvice}>Сlick and find out what to do</button>
    
    </div>
  );
}

export default App;
