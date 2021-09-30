import './App.css';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AirpodsPro from './AirpodsPro';
import CommonProduct from './components/Product/CommonProduct';
import Login from './Login';
import { useSelector } from 'react-redux';
import { User } from './features/user/userSlice';

function App() {
  const user = !useSelector(User)
  return (
    <div className="App">
      <Router>
        {user && <Navbar />}
          <Switch>
            <Route path='/shop/:apple'>
              <CommonProduct />
            </Route>
            <Route path='/airpodspro'>
              <AirpodsPro />
            </Route>
            <Route path='/login'>
              <Login />
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

