import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header/Header";
import Menu from "./components/Menu";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (<BrowserRouter>
    <div className="App layout-theme animated-css" id="wrapper">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about-us" >
          <About/>
        </Route>
        <Route path="/menu" >
          <Menu/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>);
}

export default App;
