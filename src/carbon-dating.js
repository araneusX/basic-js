const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && typeof(sampleActivity) === 'string') {
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity > 0 && sampleActivity <=MODERN_ACTIVITY) {
      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity)/0.693*HALF_LIFE_PERIOD);
    }else return false;
  }else return false;
}
