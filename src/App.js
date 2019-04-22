import React from 'react';
import './App.css';
import DefaultLayout from 'views/DefaultLayout';
import PrintPriceTag from 'views/PriceTag/Print';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={DefaultLayout} />
      <Route path="/print" component={PrintPriceTag} />
    </Router>
  );
}

export default App;
