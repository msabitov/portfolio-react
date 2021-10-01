import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import NoMatch from './pages/NoMatch';
import {AnimatePresence} from 'framer-motion';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggle = () => {
      setIsOpen(!isOpen);
  }
  const routes = [
    {path:"/", Component: Home},
    {path:"/about", Component: About},
    {path:"/tech", Component: Tech},
    {path:"/contacts", Component: Contacts},
    {path:"", Component: NoMatch}
  ];

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/tech">
            <Tech />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
