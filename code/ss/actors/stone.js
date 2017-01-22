﻿function Stone(pos) {
  this.size = new Vector(0.5, 0.5);
  this.pos = pos;
  this.speed = new Vector(0, 0);
  this.gravity = 10;
}

Stone.prototype.type = "stone";

Stone.prototype.moveX = function(step, level) {
  var motion = new Vector(this.speed.x * step, 0);
  var newPos = this.pos.plus(motion);

  var obstacle = level.obstacleAt(newPos, this.size); 
  if (!obstacle) this.pos = newPos;

  if (this.speed.x > 0) this.speed.x -= 5 * step;
  else if (this.speed.x < 0) this.speed.x += 5 * step;

  if (this.speed.x < 0.1 && this.speed.x > -0.1)
    this.speed.x = 0;
};

Stone.prototype.moveY = function(step, level) {
  this.speed.y += step * this.gravity;
  if (this.speed.y < 0.1) this.speed.y = 0;

  var motion = new Vector(0, this.speed.y * step);
  var newPos = this.pos.plus(motion);
  var obstacle = level.obstacleAt(newPos, this.size);
  if (obstacle) {
    if      (obstacle == "slideRight") this.pos.x += step * 2;
    else if (obstacle == "slideLeft")  this.pos.x -= step * 2;
  } else {
    this.pos = newPos;
  }
};

Stone.prototype.act = function(step, level) {
    this.moveX(step, level);
    this.moveY(step, level);
};
