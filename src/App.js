import React from 'react';
import './App.css';
import './assets/styles/index.scss'
import { Header, Footer } from './components';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="App">
      <Header />
      test {process.env.REACT_APP_TV_MAZE_API_URL_BASE}

      <Dashboard />

      <Footer />
    </div>
  );
}

export default App;
