const uuid4 = require('uuid');

function createUUID() {
  return uuid4();
}

module.exports.createUUID = createUUID;
