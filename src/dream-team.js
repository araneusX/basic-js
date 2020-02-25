module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members.reduce((letters, name) => {
      if (typeof(name) === 'string'){
        letters.push(name.match(/\w/)[0].toUpperCase());
        return letters;
      }return letters;
    }, []).sort().join('');
  }else return false;
};