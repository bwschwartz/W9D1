const Util = require("./util")
const MovingObject = require('./moving_object')

function Ship (game) {
  this.color = "purple";
  this.radius = 30;
  const options = {
    pos: game.randomPosition(),
    vel: Util.randomVec(0),
    radius: this.radius,
    color: this.color,
    game: game
  }
  return new MovingObject(options);
};

Util.inherits(Ship, MovingObject);

module.exports = Ship;