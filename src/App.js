import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import React from 'react'
import TodoList from './components/TodoList';
import { Route, Switch } from "react-router-dom"
import About from './components/About';
import NotMatch from './components/NotMatch';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/">
        <div className="container">
          <div className="app-wrapper">
            <div>
              <Header />
            </div>
            <div>
              <Form />
            </div>
            <div>
              <TodoList />
            </div>
          </div>
        </div>
      </Route>
      <Route path="/about" component={About}>
        <About />
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
      </Switch>
    </>
  );
}

export default App;
