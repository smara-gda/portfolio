import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import AboutMe from './components/AboutMe';
// import Experiences from './components/Experiences';
// import Projects from './components/Projects';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Main from './components/Main';

function App() {
  return (
    <div className="app">
      <HelmetProvider>
        <Helmet>
          <title>Smaragda Kalogeropoulou</title>
        </Helmet>
        <BrowserRouter>
          {/* <Header /> */}
          <Switch>
            {/* <Route path="/" component={Main} exact />
            <Route path="/experience" component={Experiences} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/about" component={AboutMe} exact /> */}
          </Switch>
          <Main />
        </BrowserRouter>
        {/* <Footer /> */}
      </HelmetProvider>
    </div>
  );
}

export default App;
