const Util =  {
  inherits(childClass, parentClass) {
    const Surr = function() {};
    Surr.prorotype = parentClass.prototype;
    childClass.prototype = new Surr();
    childClass.prototype.construtor = childClass;
  }
};

module.exports = Util;