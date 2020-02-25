module.exports = function getSeason(date) {
  const SEASONS = [
    'winter',
    'spring',
    'summer',
    'fall'
  ];
  if (!date) return 'Unable to determine the time of year!'; 
  if (date instanceof Date && !date.hasOwnProperty('getMonth')) {
    let mount = date.getMonth() + 2;
    if (mount === 13) mount = 1;
    return SEASONS[Math.ceil(mount/3) - 1];
  }else throw new Error();
};