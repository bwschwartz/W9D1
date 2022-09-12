function MovingObject (options) {
  this.pos = options['pos'];
  this.vel = options['vel'];
  this.radius = options['radius'];
  this.color = options['color'];
  this.game = options['game']
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  // console.log(`positions inside draw: ${this.pos}`)
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function () {
  const x = this.pos[0] + this.vel[0];
  const y = this.pos[1] + this.vel[1];
  this.pos[0] = this.game.wrap([x,y])[0];
  this.pos[1] = this.game.wrap([x,y])[1];
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const distance = Math.sqrt(((this.pos[0] - otherObject.pos[0])**2) + ((this.pos[1] - otherObject.pos[1]) ** 2));
  const radialSum = this.radius + otherObject.radius;
  return distance < radialSum;
}

module.exports = MovingObject;