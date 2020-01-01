import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/styles/index.scss'
import { Header, Footer } from './components';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import { Provider } from 'react-redux';
import { store } from './store'

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
