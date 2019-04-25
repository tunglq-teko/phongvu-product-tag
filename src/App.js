import React, { useState } from 'react';
import './App.css';
import DefaultLayout from 'views/DefaultLayout';
import PrintProductTag from 'views/Print';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [printData, setPrintData] = useState();

  return (
    <Router>
      <Switch>
        <Route path="/print" render={props => <PrintProductTag {...props} setPrintData={setPrintData} printData={printData} />} />
        <Route
          path="/"
          render={props => <DefaultLayout {...props} printData={printData} setPrintData={setPrintData} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
