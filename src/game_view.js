const Game = require('./game.js');

function GameView (ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(this.moveAndDraw.bind(this), 20)
}

GameView.prototype.moveAndDraw = function () {
  this.game.step();
  this.game.draw(this.ctx);
}

module.exports = GameView;