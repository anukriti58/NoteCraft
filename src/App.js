import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = "black"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "#FFEBF6"
    }
  }
  return (
    <>
      <Navbar title = "NoteCraft" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-3" >
      <TextForm heading = "Enter Your Text Below!" mode={mode} />
      </div>
    </>
  );
}

export default App;
