var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  var arr = [];
  var obj = {};
  return {
    _storage: [],
    retrieve: function(key) {
      for (var i = 0; i<arr.length; i++) {
        if ()
      }
    },

    insert: function(key, value) {
      obj[key] = value
      arr.push(obj);
      this._storage[hashFn(key,mak)] = arr;
    }
  };
}
// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};