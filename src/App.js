import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'
import { Header, Footer } from './components';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Movie from './pages/Movie';
import './assets/styles/index.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
