/*
 * UUID generation
 */

//type - optional, random-based by default. Possible values are 'time-based' or 'random' 
export function generateUUID(type) {
  if (type === 'time') {
    return _generateTimebasedUUID();
  } else {
    return _generateRandomUUID();
  }
}

function _generateTimebasedUUID() {
  return uuid.v1();
}

function _generateRandomUUID() {
  return uuid.v4();
}
