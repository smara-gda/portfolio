import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
          {/* <Routes>
            {/* <Route path="/" component={Main} exact />
            <Route path="/experience" component={Experiences} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/about" component={AboutMe} exact /> */}
          {/* </Routes> */}
          <Main />
        </BrowserRouter>
        {/* <Footer /> */}
      </HelmetProvider>
    </div>
  );
}

export default App;
