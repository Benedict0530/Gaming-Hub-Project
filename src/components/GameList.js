// src/components/GameList.js
import React from 'react';
import GameItem from './GameItem';
import gamesData from '../data/gamesData';

const GameList = () => {
  return (
    <div className="game-list">
      {gamesData.map((game) => (
        <GameItem key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameList;
