import React from 'react';
import { NavLink, Switch, Route, Redirect } from 'react-browser-router';
import whiskeyImage from './images/whiskey.jpg';
import hazelImage from './images/hazel.jpg';
import tubbyImage from './images/tubby.jpg';

import './App.css';

function Whiskey() {
  return (
    <div>
      <h2>Whiskey</h2>
      <p>Whiskey is a dog. Not a drink. But he is super fun!</p>
    </div>
  );
}

function Hazel() {
  return (
    <div>
      <h2>Hazel</h2>
      <p>Such a nice dog. Very cute.</p>
    </div>
  );
}

function Tubby() {
  return (
    <div>
      <h2>Tubby</h2>
      <p>Tubby is adorable and very smart.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>HELLOZ. WE HAVE DOGZ. CLICK ON THEM.</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/dogs/whiskey">
              <img src={whiskeyImage} alt />
              Whiskey
            </NavLink>
          </li>
          <li>
            <NavLink to="/dogs/hazel">
              <img src={hazelImage} alt />
              Hazel
            </NavLink>
          </li>
          <li>
            <NavLink to="/dogs/tubby">
              <img src={tubbyImage} alt />
              Tubby
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="details">
        <Switch>
          <Route path="/dogs/whiskey" component={Whiskey} />
          <Route path="/dogs/hazel" component={Hazel} />
          <Route path="/dogs/tubby" component={Tubby} />
          <Route path="/dogs" render={() => { return "Choose a dog" }} />
          <Route path="*" render={() => { return <Redirect to="/dogs" /> }} />
        </Switch>
      </div>
    </div>
  );
}


export default App;