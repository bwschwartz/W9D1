const Util = require("./util");
const MovingObject = require('./moving_object')

function Asteroid (pos) {
    this.color = "red"
    this.radius = 6
    this.pos = pos
    const options = {
        pos: pos,
        vel: Util.randomVec(1),
        radius: 6,
        color: "red"
    }
    return new MovingObject(options)
};

Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;

// window.Asteroid = Asteroid;

