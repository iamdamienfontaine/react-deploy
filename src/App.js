import React from 'react';
import profileImage from './img/profileImage.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Mon Application React</h1>
        <h2>Auteur : Damien Fontaine</h2>  
        <img src={profileImage} alt="profile" />
    </div>
  );
}

export default App;
