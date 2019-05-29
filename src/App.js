import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//REDUX
import store from './store';
import { Provider } from 'react-redux';
//COMPONENTS
import NotFound from './components/pages/NotFound';
import Header from './components/layout/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import TaskList from './components/pages/TaskList';
import AddProvider from './components/pages/AddProvider';
import DoctorTasks from './components/pages/DoctorTasks';
//CSS
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-provider" component={AddProvider} />
            <Route exact path="/task-list" component={TaskList} />
            <Route exact path="/doctor/:doctor_id" component={DoctorTasks} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
