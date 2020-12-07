import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import EditNote from './components/EditNote'
import ShowNote from './components/ShowNote'
import NotesForm from './components/NotesForm'
import { connect } from 'react-redux'
import NotesContainer from './containers/NotesContainer' 

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          {/* Logins */}
          <Route path='/login' render={(props) => <Login {...props} /> } />
          {/* Register */}
          <Route path='/register' render={(props) => <Register {...props} /> } />
          {/* notes form */}
          <Route path='/notes/new' render={(props) => <NotesForm {...props} />} />
          {/* editing a note */}
          <Route path='/notes/:id/edit' render={(props) => <EditNote {...props} />} />
          {/* showing a note */}
          <Route path='/notes/:id' render={(props) => <ShowNote {...props} />} />
          {/* notes container */}
          <Route path='/notes' render={(props) => <NotesContainer {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;