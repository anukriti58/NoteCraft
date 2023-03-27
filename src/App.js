import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "black"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "#FFEBF6"
    }
  }
  return (
    <>
      {/* <Navbar title = "NoteCraft" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-3" >
      <TextForm heading = "Enter Your Text Below!" mode={mode} />
      </div> */}
      <Router>
        <Navbar title="NoteCraft" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={
              <div className="container">
                <TextForm
                  heading="Enter the text to analyze below"
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;