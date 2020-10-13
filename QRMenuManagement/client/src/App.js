import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import { DummyApp } from './features/dummy_app/DummyApp';
import { QrManager } from './features/qr_manager/QrManager';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dummy App</Link>
            </li>
            <li>
              <Link to="/QRManager">QR Manager</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/QRManager">
            <QrManager />
          </Route>
          <Route path="/">
            <DummyApp />
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
