const Ship = require ('./ship');

function Game() {
    this.DIM_X = 1000;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 15;
    this.asteroids = [];
    this.addAsteroids();
    this.ship = new Ship(this);
}

Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        const asteroid = new Asteroid(this.randomPosition(), this);
        this.asteroids.push(asteroid);
    }
}

Game.prototype.randomPosition = function() {
    let x = Math.floor(Math.random() * this.DIM_X);
    let y = Math.floor(Math.random() * this.DIM_Y);
    return [x, y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y)
    // for (const asteroid of this.asteroids) {
    //     asteroid.draw(ctx);
    // }
    for (const obj of this.allObjects()) {
        obj.draw(ctx)
    }
}

Game.prototype.moveObjects = function() {
    for (const asteroid of this.asteroids) {
        asteroid.move();
    }
}

Game.prototype.wrap = function (pos) {
    const x = ((pos[0] % this.DIM_X) + this.DIM_X) % this.DIM_X
    const y = ((pos[1] % this.DIM_Y) + this.DIM_Y) % this.DIM_Y
    return [x, y]
}

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length - 1; i++) {
    for (let j = i+1; j < this.asteroids.length; j ++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
            console.log(`start length = ${this.asteroids.length}`)
            this.asteroids = this.remove(this.asteroids[i]);
            this.asteroids = this.remove(this.asteroids[j-1]);
        }
    }
  }
}

Game.prototype.step = function() {
    this.moveObjects();
    console.log("test")
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    return this.asteroids.filter( function(el) {
        return el != asteroid;
    })
}

Game.prototype.allObjects = function(){
    return this.asteroids.concat([this.ship])
    // alert(Array.isarray(testAll))
}

module.exports = Game;