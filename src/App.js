import { useState } from 'react';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark Mode Has Been Enabled", "Success")
      // document.title = 'TextUtils - Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enabled", "Success")
      // document.title = 'TextUtils - Light Mode'

    }
  }
  return (
  <>
  {/* <BrowserRouter>  */}
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Routes>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/" element={<TextForm heading="Write Text Here" mode={mode} showAlert={showAlert} />}></Route>
    </Routes> */}
      {/* <About/> */}
      <TextForm heading="Try TextUtils -word counter, characters counter " mode={mode} showAlert={showAlert} />
    </div>
  {/* </BrowserRouter> */}
  </>
  );
}

export default App;
