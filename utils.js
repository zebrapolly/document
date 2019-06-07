const uuid4 = require('uuid');

function createUUID() {
  return uuid4();
}

function createFilePath(id) {
  let res = '';
  for (let i = 0; i < 3; i++) {
    res += `${id.substring(0, i)}/`;
  };
  return res;
}

function getFileExt(type) {
  return type.substring(type.indexOf('/')+1);
}

module.exports = {
  createUUID,
  createFilePath,
  getFileExt,
};

