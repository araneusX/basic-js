module.exports = class DepthCalculator {
    calculateDepth(arr) {
      return arr.reduce((depth, current) => {
        if (Array.isArray(current)) {
          let currentDepth = this.calculateDepth(current);
          if (currentDepth > depth) {
            return currentDepth;
          }else return depth;
        }else return depth;
      }, 0) + 1;
    }
};

