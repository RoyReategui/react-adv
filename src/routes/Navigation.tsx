import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import  logo  from '../assets/react.svg'


export function Navigation() {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={logo} alt="Logo Vite" />

          <ul>
            <li>
              <NavLink to="/home" activeClassName="nav-active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="nav-active" >Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
              <h1> About </h1>
          </Route>
          <Route path="/users">
              <h1> User </h1>
          </Route>
          <Route path="/home">
              <h1> Home </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}