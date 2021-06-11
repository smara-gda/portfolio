import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/experience" component={Experiences} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/about" component={AboutMe} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
