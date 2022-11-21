
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#121652";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
        <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
      <Routes>  
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} /> }/>
          <Route exact path='/about' element={<About mode={mode}/>}/>
       </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
