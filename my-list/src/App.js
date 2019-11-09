import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListView from './components/ListView';
import MainView from './components/MainView';
import NewItemView from './components/NewItemView';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <Route exact path="/" component={MainView} />
          <Route exact path="/films" render={(props) => <ListView {...props} topic="films" />} />
          <Route exact path="/series" render={(props) => <ListView {...props} topic="series" />} />
          <Route exact path="/addItem" component={NewItemView} />
        </Router>
      </div>
    );
  }
}

export default App;
