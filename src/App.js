import { Container } from 'reactstrap';
import './App.css';
import { Navbar } from './component/Navbar';
import { TextForm } from './component/TextForm';
import { useState } from 'react';
import Alert from './component/Alert';

import {
  Route,
  BrowserRouter as Router,
  Routes,
  Switch
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
          <Route showAlert={showAlert} path="/" heading="TextUtils - word counter, character counter, remove extra spaces" element={<TextForm />} />
          <Route exact path="/about" element={<About />} />

          {/* <About  path="/about" component={About}/> */}
        </Routes>
        {/* <Navbar /> */}
        <Container>

        </Container>
      </Router>
    </>
  );
}

export default App;
