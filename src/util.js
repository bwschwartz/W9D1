const Util =  {
  inherits(childClass, parentClass) {
    const Surr = function() {};
    Surr.prorotype = parentClass.prototype;
    childClass.prototype = new Surr();
    childClass.prototype.construtor = childClass;
  },

  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};

module.exports = Util;