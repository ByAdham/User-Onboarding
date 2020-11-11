import './App.css';
import React, {useState, useEffect} from 'react';
import MemberForm from './Components/MemberForm'
import Members from "./Components/Members";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://relaxedpowerful.s3.us-east-2.amazonaws.com/logo.png" className="App-logo" alt="logo" />
        <h1> Tantive Team Members </h1>
      </header>

      <section className="joinForm">
        <MemberForm />
      </section>

      <section className="currentMembers">
        <Members />
      </section>
    </div>
  );
}

export default App;
