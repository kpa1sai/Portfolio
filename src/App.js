import React from 'react';
import './App.css';
import Header from './components/common/Header'; 
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header /> {/* Include Header component */}
      <main>
        <Home /> {/* Include Home component */}
      </main>
    </div>
  );
}

export default App;