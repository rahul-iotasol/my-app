import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
/*import About from './components/About';*/
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/*
import { 
  BrowserRouter as Router, 
  Route,  
  Routes
} from "react-router-dom";
*/

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
        setAlert({
          msg: message,
          type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);

  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#405191';
      showAlert("Dark Mode has been enabaled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabaled", "success")
    }
  }

  return (
<>
{/*<Router>*/}

      <Navbar title="Iotasol" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-5">
      {<TextForm heading="Enter the text to analyse below" showAlert={showAlert} mode={mode} /> }

      {/*<Routes>
         <Route exact path="/" element={<TextForm heading="Enter the text to analyse below" showAlert={showAlert} mode={mode} /> } />
         <Route exact path="/about" element={<About />} />
  </Routes>*/}
      </div>

{/*</Router>*/}

</>
  );
}


export default App;