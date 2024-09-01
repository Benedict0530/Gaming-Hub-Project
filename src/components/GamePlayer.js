// src/components/GamePlayer.js
import React from 'react';
import { useParams } from 'react-router-dom';
import gamesData from '../data/gamesData';
import './GamePlayer.css'; // Import the CSS file

const GamePlayer = () => {
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === id);

  return (
    <div className="game-player">
      <h2>{game.title}</h2>
      <div className="iframe-container">
        <iframe
          src={game.url}
          title={game.title}
          frameBorder="0"
          allow="fullscreen; touch-action"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default GamePlayer;
