import React, { useState } from 'react';
import './App.css';
import Todo from './Components/Todo.js';
import PropTypes from 'prop-types';




function App() {

  
  return (
    <div className="App">
      <h1>Welcome </h1>

      <h1>ToDo List , What do you prefer to do ?</h1>
      <Todo />
      
   


    </div>)
}




  export default  App