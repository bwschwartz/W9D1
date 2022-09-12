document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext('2d');
  const gameView = new GameView(ctx);
  gameView.start();
})

console.log("hi from index.js");

const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;

module.exports = canvasEl;



