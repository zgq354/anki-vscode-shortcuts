const fs = require('fs');
const data = require('./shortcuts/macos.json');

const result = data.types.reduce((resultArr, currTypeObj) => {
  return resultArr.concat(currTypeObj.list.map(item => {
    const { key, caption } = item;
    return {
      caption,
      key,
      tag: currTypeObj.title.replace(/ /g, '-'),
    };
  }));
}, []).map(keyObj => {
  return Object.keys(keyObj).map(k => keyObj[k]).join('\t');
}).join('\n');

// console.log(result);
fs.writeFileSync('./output/anki-import.txt', result);
