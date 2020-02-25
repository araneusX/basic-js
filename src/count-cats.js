module.exports =  function countCats(backyard) {
  return backyard.reduce((counterAll, arr) => {
    return counterAll += arr.reduce((counter, current) => current === '^^' ? ++counter : counter, 0) 
  }, 0);
}