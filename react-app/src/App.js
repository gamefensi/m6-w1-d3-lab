import { Component } from 'react';
// import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './BookList';
import BookEdit from './BookEdit';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* ::Bypass Home component::
                <Route path='/' exact={true} component={Home}/>
                <Route path='/books' exact={true} component={BookList}/> */}
          <Route path='/' exact={true} component={BookList}/>
          <Route path='/:id' component={BookEdit}/> 
        </Switch>
      </Router>
    )
  }
}

export default App;
