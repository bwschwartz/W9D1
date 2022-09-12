const Util = require("./util");
const MovingObject = require('./moving_object')

function Asteroid (pos, game) {
    this.color = "red";
    this.pos = pos;
    this.radius = 20;
    const options = {
        pos: pos,
        vel: Util.randomVec(2),
        radius: this.radius,
        color: "green",
        game: game
    }
    return new MovingObject(options)
};

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;

// window.Asteroid = Asteroid;

