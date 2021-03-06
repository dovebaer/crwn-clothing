import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>Hats</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/Hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
