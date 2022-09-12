const Util = require("./util");
const MovingObject = require('./moving_object')

function Asteroid (pos, game) {
    this.color = "red"
    this.radius = 6
    this.pos = pos
    const options = {
        pos: pos,
        vel: Util.randomVec(2),
        radius: 50,
        color: "green",
        game: game
    }
    return new MovingObject(options)
};

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;

// window.Asteroid = Asteroid;

