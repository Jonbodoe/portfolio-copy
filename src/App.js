import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  withRouter,
  // Link
} from "react-router-dom";

import NavBar from './components/Navbar.js';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import Work from './components/Work.js';
import ScrollToTop from './assets/etc/scrollTop';
import {
  TransitionGroup,
  CSSTransition
} from 'react-transition-group';
import Contact from './components/Contact.js';




const App = ({ location }) => {
  return (<React.Fragment>
    <ScrollToTop />
    {
    location.pathname === "/resume" ? "" : <NavBar location={location.hash}/>
    }
    <Route render={({ location }) => (
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={200}
          classNames='fade'
        >
          <Switch location={location}>
            <Route path={`${process.env.PUBLIC_URL}/works`}>
              <Work />
            </Route>
            <Route path={`${process.env.PUBLIC_URL}/resume`}>
              <Resume />
            </Route>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <Home/>
            </Route>
            {/* <Route path={`${process.env.PUBLIC_URL}/#contact`}>
              <Contact/>
            </Route> */}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )} />
  </React.Fragment>

  );
}

export default withRouter(App);
