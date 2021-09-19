import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen);
  }
  const routes = [
    {path:"/", Component: Home},
    {path:"/about", Component: About},
    {path:"/tech", Component: Tech},
    {path:"/contacts", Component: Contacts}
  ];
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;
