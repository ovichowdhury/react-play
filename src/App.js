import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './components/AutoComplete';
import { Switch, BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import Dashboard from './components/Dashboard';
import FileUtils from './components/FileUtils';
import ScrollToElement from './components/ScrollToElement';
import Liveness from './components/Liveness';
import LivenessExpr from './components/LivenessExpr';
import ImageCapture from './components/ImageCapture';
import DragDrop from './components/DragDrop';
import FbLogin from './components/FbLogin';
import KeysTransform from './components/KeysTransform';
import ValidationHooks from './components/ValidationHooks';
import ValidationLibrary from './components/ValidationLibrary';
import GeolocationApi from './components/GeolocationApi';
import SWUI from './components/CustomSwaggerUI';


function App() {
  return (
    <div className="App">
      <br></br>
      <SWUI></SWUI>
      {/* <GeolocationApi></GeolocationApi> */}
      {/* <ValidationLibrary></ValidationLibrary> */}
      {/* <ValidationHooks></ValidationHooks> */}
      {/* <KeysTransform></KeysTransform> */}
      {/* <FbLogin></FbLogin> */}
      {/* <DragDrop></DragDrop> */}
      {/* <ImageCapture/> */}
      {/* <LivenessExpr></LivenessExpr> */}
      {/* <Liveness></Liveness> */}
      {/* <ScrollToElement></ScrollToElement> */}
      {/* <FileUtils></FileUtils> */}
      {/* <AutoComplete></AutoComplete> */}
      {/* <BrowserRouter>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users" target="_blank">Users</Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter> */}

        

      </div>
  );
}

function Home() {

  useEffect(() => {
    console.log("[info] setting token...");
    sessionStorage.setItem('token', 'abcde');
  })
  
  return (
      <div>
        Home Page !
    </div>
  )
}

function About() {
  return (
      <div>
        About Page !
    </div>
  )
}

function Users(props) {
  if(sessionStorage.getItem('token').toString() !== "abcd") {
    console.log("In...");
    return (
      <Redirect to='/'></Redirect>
    )
  }
  return (
      <div>
        Users Page !
    </div>
  )
}

export default App;
