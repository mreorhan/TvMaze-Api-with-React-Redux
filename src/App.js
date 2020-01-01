import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/styles/index.scss'
import { Header, Footer } from './components';
import Dashboard from './pages/Dashboard';
import About from './pages/About';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
