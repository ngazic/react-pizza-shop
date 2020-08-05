import React from "react";
import Home from "./components/Home";
import Hero from "./components/Hero";
import About from "./components/About";
import Header from "./components/header/Header";
import Menu from "./components/pizza-menu/Menu";
import Footer from "./components/Foooter";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import store from  "./store";

function App() {
  return (
    <Provider store={store}>
  <BrowserRouter>
    <div className="App layout-theme animated-css" id="wrapper">
      <Header />
      <Hero />
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
      <Footer />
    </div>
  </BrowserRouter>
  </Provider>);
}

export default App;
