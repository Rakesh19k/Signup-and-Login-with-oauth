import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import LogIn from  './components/LogIn';
import Home from './components/Home';

function App() {
  return (
    // <div className="app">
    //   {/* <Home/> */}
    //   {/* <SignUp/> */}
    //   {/* <LogIn/> */}
    // </div>
      
        <>
            <Switch>
              <Route path="/" exact component={SignUp}/>
              <Route path="/login" component={LogIn}/>
              <Route path="/home" component={Home}/>
            </Switch>
        </>
  
  );
}

export default App;

