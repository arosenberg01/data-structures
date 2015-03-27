var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[i]){
    this._storage[i] = [];
  }
  var keyValPair = [];
  keyValPair.push(k);
  keyValPair.push(v);
  this._storage[i].push(keyValPair);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i]
  var result = null;
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      result = bucket[j][1];
      break;
    }
  }
  return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[i];
  var result = null;
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      result = bucket[j][1];
      bucket[j][0] = null;
    }
  }
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
