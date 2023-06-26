//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
   const [mode, setMode]=useState('light');
   const[alert,setAlert]=useState(null);
   const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='Light'){

      setMode('dark');
      document.body.style.backgroundColor='#6c757d';
      showAlert("Dark mode has been enabled","Success");
      document.title='Myapp-Dark Mode';
      
     
    }
    else{
      setMode('Light');
  document.body.style.backgroundColor='white';
  showAlert("Light mode has been enabled","Success");
  document.title='Myapp-Light Mode';
      
  
}
};
  //     setInterval(()=>{
  //       document.title='My-app is an amazing website.';
  //   },2000);
  //   setInterval(()=>{
  //     document.title='Install My-app.';
  // },1500);


  //enabled darkMode or not
 return (
  <>
  {/* <Router> */}
   <Navbar title="My-app" mode={mode} toggleMode={toggleMode}/>  
   <Alert alert={alert}/> 
  {/* <Navbar /> 
  {/* //<Navbar title='My-app' mode={darkMode}/> */}

   <div className="container my-3"> 
   {/* <Routes>
          <Route exact path="/About" element={<About />}>
           </Route>
          <Route exact path="/" element={<TextForm/>}> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Routes>
        <Link/> */}
        
        
   {/* <About/> */}
   
   {/* </Router> */}
  
   
   
 {/* <About/> */}
{/* </></div> */}
</div>
    
    </>

  );
 }


export default App;
 