import React from 'react'
import Routes from './Routes';
import {BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <div className='conatiner p-3'>
      <Router>
        <Switch>
          <Routes/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
