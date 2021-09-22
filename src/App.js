import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import NoMatch from './pages/NoMatch';

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

/*const AnimatedSwitch = withRouter(({ location }) => (
  <TransitionGroup>
      <CSSTransition
            key={location.key}
            classNames="slide"
            timeout={2000}
            unmountOnExit
          >
      
      </CSSTransition>
      </TransitionGroup>
  ));*/

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tech" component={Tech} />
        <Route exact path="/contacts" component={Contacts} />
        <Route component={NoMatch}></Route>
      </Switch>
    </Router>
  );
}

export default App;
