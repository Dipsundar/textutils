// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#17072b';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enabled.', "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Dark mode has been disabled.', "success");
    }
  }



  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" AboutText="About" />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
          <Route exact path="/textutils/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes>
        </div>
        <Footer footerText='2023 dipsundarmajhi@gmail.com' />
      </Router>
    </>
  );
}

export default App;


