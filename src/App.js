import { Container } from 'reactstrap';
import './App.css';
import { Navbar } from './component/Navbar';
import { TextForm } from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';

import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { About } from './component/About';


function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtil" about="about" />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        {/* <Navbar /> */}
        <Container>

        </Container>
      </Router>
    </>
  );
}

export default App;
