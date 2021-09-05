import './App.css';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Mac from './Mac';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path='/mac'>
              <Mac />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

