import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

function App() {
  return (<BrowserRouter>
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about" >
          <About/>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>);
}

export default App;
