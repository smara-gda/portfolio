import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
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
