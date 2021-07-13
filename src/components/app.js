import { h } from 'preact';
import { Router } from 'preact-router';

// import Header from './header';
import Game from './game';

// Code-splitting is automated for `routes` directory
// import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => (
  <div id='app'>
    {/* <Header /> */}
    <Router>
      <Game path='/' />
      <Profile path='/profile/' user='me' />
      <Profile path='/profile/:user' />
    </Router>
  </div>
);

export default App;
