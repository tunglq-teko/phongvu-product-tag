import React from 'react';
import './App.css';
import DefaultLayout from 'views/DefaultLayout';
import PrintProductTag from 'views/Print';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/print" component={PrintProductTag} />
        <Route path="/product-tag" component={DefaultLayout} />
        <Route path="/" component={DefaultLayout} />
      </Switch>
    </Router>
  );
}

export default App;
