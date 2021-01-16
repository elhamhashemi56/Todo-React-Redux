import React from 'react-redux'
import { Provider } from 'react-redux'
import store from '../store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import './App.css';
//import TodoApp from './todoApp/TodoApp'
import Navbar from './Navbar'

import Kontact from './Kontact.js'
import About from './About.js'
import Email from './Email.js'
//import App from './App.js'
import Nichtgefunden from './Nichtgefunden.js'
import TodoRedux from './todoredux/TodoRedux'



function App() {
  return (
   <Provider store={store}>
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Redirect exact path='/' to='/todo'></Redirect>
          <Route path='/todo'><TodoRedux /> </Route>
          <Route path='/aboutus'><About /></Route>
          <Route path='/contactus'><Kontact /></Route>
          <Route path='/email'><Email /></Route>
          <Route path='*'><Nichtgefunden /></Route>
        </Switch>

      </div>
    </Router>
   </Provider>
  );
}

export default App;
