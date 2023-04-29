

import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';  
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
  }from "react-router-dom"
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message , type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1a2e41'
      showAlert("Dark Mode is Enable","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#aebed5'
      showAlert("Light Mode is Enable","success");


    }
  }
  

  return (
    <>
      <Router>
        <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About about="About Us" />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyze below"mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
      
    </>
  );
}

export default App;
