import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Success from './components/Success'
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom';


function App() {


  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
