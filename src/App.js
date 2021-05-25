import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import React from 'react'
import TodoList from './components/TodoList';

const App = () => {

  return (
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
  );
}

export default App;
