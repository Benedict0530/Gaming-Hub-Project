// src/components/GameItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const GameItem = ({ game }) => {
  return (
    <div className="game-item">
      <Link to={`/game/${game.id}`}>
        <img src={game.thumbnail} alt={game.title} className="thumbnail" />
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </Link>
    </div>
  );
};

export default GameItem;
