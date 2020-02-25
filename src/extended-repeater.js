module.exports = function repeater(str, options) {
  str = '' + str;
  options = {
    repeatTimes: 'repeatTimes' in options ?  options.repeatTimes || 1 : 0,
    separator: options.separator === '' ? '' :   options.separator || '+',
    addition: 'addition' in options ? '' + options.addition : '',
    additionRepeatTimes: 'additionRepeatTimes' in options ?  options.additionRepeatTimes || 1 : 0,
    additionSeparator: options.additionSeparator === '' ? '' : options.additionSeparator || '|' ,
  }
  let additions = '';
  let resultArr = [];
  let additionsArr = [];
  
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionsArr.push(options.addition)
  }
  additions = additionsArr.join(options.additionSeparator);

  for (let i = 0; i < options.repeatTimes; i++) {
   resultArr.push(str + additions);
  }
  return (resultArr.join(options.separator));
};
  