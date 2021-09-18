import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Contacts from './pages/Contacts';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Home />
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
