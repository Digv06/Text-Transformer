import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');

  const [alert, setalert] = useState("null");

  // Function that used for setAlert which is not the from the useState
  const setAlert = (message, type) =>{
    setalert({
      message : message,
      type : type,
    });
    setTimeout(() =>{
       setalert(null);
    }, 1000)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlert("Dark Mode Enabled." , "success");
      document.title = "Text Transformer | Dark Mode";
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light Mode Enabled." , "success");
      document.title = "Text Transformer | Light Mode"; 
    }
  }
  return (
    <>    

    <Router>

    <Navbar  title="Text Transformer" mode = {mode} toggleMode= {toggleMode}/> {/* Props Used*/}
    {/* <Navbar />  */}

    <Alert alert = {alert}/>

    <div className="container my-3">

    <Switch>
      <Route exact path="/about">
        <About mode = {mode}/>
      </Route>
      <Route exact path="/">
        <TextForm setAlert = {setAlert} heading="Try Text Transformer : Word counter, Character counter, Remove extra spaces" mode={mode}/>
      </Route>
    </Switch>

      
    </div>
     </Router> 
    </>
  );
}

export default App;
