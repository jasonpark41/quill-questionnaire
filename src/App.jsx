import React from 'react';
import Questionnaire from './components/Questionnaire';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Quill Healthcare Questionnaire</h1>
        <p>Find the right office and cleaning supplies for your clinic</p>
      </header>
      <main className="app-main">
        <Questionnaire />
      </main>
    </div>
  );
}

export default App;

