function Game() {
    this.DIM_X = 1000;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 4;
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        const asteroid = new Asteroid(this.randomPosition(), this);
        this.asteroids.push(asteroid);
        console.log(`game this refers to: ${this}`)
    }
}

Game.prototype.randomPosition = function() {
    let x = Math.floor(Math.random() * this.DIM_X);
    let y = Math.floor(Math.random() * this.DIM_Y);
    return [x, y];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y)
    for (const asteroid of this.asteroids) {
        asteroid.draw(ctx);
    }
}

Game.prototype.moveObjects = function() {
    for (const asteroid of this.asteroids) {
        asteroid.move();
    }
}

Game.prototype.wrap = function (pos) {
    return [pos[0] % this.DIM_X, pos[1] % this.DIM_Y]
}


Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length - 1; i++) {
    for (let j = i+1; j < this.asteroids.length; j ++) {
        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
            alert("COLLISION!")
        }
    }
  }
}

Game.prototype.step = function() {
    this.moveObjects();
    console.log("test")
    this.checkCollisions();
}

module.exports = Game;