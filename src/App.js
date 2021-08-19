// import React, { Component } from 'react';
import PersonsLists from './Components/PersonsList';
import PersonsInput from './Components/PersonInput';
import { RegisterForm } from './Components/RegisterForm';
import './App.css';

function App() {
  return (
    <div className="App-header ">
      <header >
        <h2>Welcome to React</h2>
      </header>
     {/*  <PersonsInput/>
      <PersonsLists/> */}
      <RegisterForm/>
    </div>
  );
}

export default App;
