import './App.css';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AirpodsPro from './AirpodsPro';
import CommonProduct from './components/Product/CommonProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Switch>
            <Route path='/airpodsmax'>
              <CommonProduct />
            </Route>
            <Route path='/airpodspro'>
              <AirpodsPro />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

