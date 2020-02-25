const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && Number.isInteger(position) && position > 0 && position <= this.chain.length) {
      this.chain.splice(position - 1, 1);
      return this;
    }else{
      this.chain = [];
      throw (new Error);
    } 
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let output = this.chain.map(i => `( ${i} )`).join('~~');
    this.chain = [];
    return output;
  }
};

//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4))
 module.exports = chainMaker;
