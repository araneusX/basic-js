module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  function calculateSteps (disksNumber) {
    if (disksNumber > 1) {
      return calculateSteps(disksNumber - 1) * 2 + 1;
    }else return disksNumber;
  }
  let steps = calculateSteps(disksNumber);
  return {
    turns: steps,
    seconds: steps / (turnsSpeed / 3600)
  }
}