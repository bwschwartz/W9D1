/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\n\nfunction Asteroid (pos, game) {\n    this.color = \"red\";\n    this.pos = pos;\n    this.radius = 20;\n    const options = {\n        pos: pos,\n        vel: Util.randomVec(2),\n        radius: this.radius,\n        color: \"green\",\n        game: game\n    }\n    return new MovingObject(options)\n};\n\nUtil.inherits(Asteroid, MovingObject)\n\nmodule.exports = Asteroid;\n\n// window.Asteroid = Asteroid;\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__ (/*! ./ship */ \"./src/ship.js\");\n\nfunction Game() {\n    this.DIM_X = 1000;\n    this.DIM_Y = 600;\n    this.NUM_ASTEROIDS = 15;\n    this.asteroids = [];\n    this.addAsteroids();\n    this.ship = new Ship(this);\n}\n\nGame.prototype.addAsteroids = function() {\n    while (this.asteroids.length < this.NUM_ASTEROIDS) {\n        const asteroid = new Asteroid(this.randomPosition(), this);\n        this.asteroids.push(asteroid);\n    }\n}\n\nGame.prototype.randomPosition = function() {\n    let x = Math.floor(Math.random() * this.DIM_X);\n    let y = Math.floor(Math.random() * this.DIM_Y);\n    return [x, y];\n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y)\n    // for (const asteroid of this.asteroids) {\n    //     asteroid.draw(ctx);\n    // }\n    for (const obj of this.allObjects()) {\n        obj.draw(ctx)\n    }\n}\n\nGame.prototype.moveObjects = function() {\n    for (const asteroid of this.asteroids) {\n        asteroid.move();\n    }\n}\n\nGame.prototype.wrap = function (pos) {\n    const x = ((pos[0] % this.DIM_X) + this.DIM_X) % this.DIM_X\n    const y = ((pos[1] % this.DIM_Y) + this.DIM_Y) % this.DIM_Y\n    return [x, y]\n}\n\nGame.prototype.checkCollisions = function() {\n  for (let i = 0; i < this.asteroids.length - 1; i++) {\n    for (let j = i+1; j < this.asteroids.length; j ++) {\n        if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {\n            console.log(`start length = ${this.asteroids.length}`)\n            this.asteroids = this.remove(this.asteroids[i]);\n            this.asteroids = this.remove(this.asteroids[j-1]);\n        }\n    }\n  }\n}\n\nGame.prototype.step = function() {\n    this.moveObjects();\n    console.log(\"test\")\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid) {\n    return this.asteroids.filter( function(el) {\n        return el != asteroid;\n    })\n}\n\nGame.prototype.allObjects = function(){\n    return this.asteroids.concat([this.ship])\n    // alert(Array.isarray(testAll))\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView (ctx) {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function() {\n  setInterval(this.moveAndDraw.bind(this), 20)\n}\n\nGameView.prototype.moveAndDraw = function () {\n  this.game.step();\n  this.game.draw(this.ctx);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  const canvasEl = document.getElementById('game-canvas');\n  const ctx = canvasEl.getContext('2d');\n  const gameView = new GameView(ctx);\n  gameView.start();\n})\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject (options) {\n  this.pos = options['pos'];\n  this.vel = options['vel'];\n  this.radius = options['radius'];\n  this.color = options['color'];\n  this.game = options['game']\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  // console.log(`positions inside draw: ${this.pos}`)\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function () {\n  const x = this.pos[0] + this.vel[0];\n  const y = this.pos[1] + this.vel[1];\n  this.pos[0] = this.game.wrap([x,y])[0];\n  this.pos[1] = this.game.wrap([x,y])[1];\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  const distance = Math.sqrt(((this.pos[0] - otherObject.pos[0])**2) + ((this.pos[1] - otherObject.pos[1]) ** 2));\n  const radialSum = this.radius + otherObject.radius;\n  return distance < radialSum;\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\")\n\nfunction Ship (game) {\n  this.color = \"purple\";\n  this.radius = 30;\n  const options = {\n    pos: game.randomPosition(),\n    vel: Util.randomVec(0),\n    radius: this.radius,\n    color: this.color,\n    game: game\n  }\n  return new MovingObject(options);\n};\n\nUtil.inherits(Ship, MovingObject);\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util =  {\n  inherits(childClass, parentClass) {\n    const Surr = function() {};\n    Surr.prorotype = parentClass.prototype;\n    childClass.prototype = new Surr();\n    childClass.prototype.construtor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;