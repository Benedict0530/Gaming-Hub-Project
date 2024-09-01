// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/GameList';
import GamePlayer from './components/GamePlayer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<GameList />} />
          <Route path="/game/:id" element={<GamePlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
