document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext('2d');
  
})

console.log("hi from index.js");

const MovingObject = require('./moving_object.js');

window.MovingObject = MovingObject;
