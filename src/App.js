import React from 'react'
import Routes from './Routes';
import {BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <div className='container p-1'>
      <BrowserRouter>
        <Switch>
          <Routes/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
