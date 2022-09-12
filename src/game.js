function Game(xDim=150, yDim=150) {
    this.DIM_X = xDim;
    this.DIM_Y = yDim;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < this.NUM_ASTEROIDS) {
        const asteroid = new Asteroid(this.randomPosition());
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

module.exports = Game;