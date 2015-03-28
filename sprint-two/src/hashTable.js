var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._entry = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[i]){
    this._storage[i] = [];
    this._entry++;
    if(this._entry >= this._limit * 0.75){
      this.rehash(true);
      i = getIndexBelowMaxForKey(k, this._limit);
      this._storage[i] = [];
      this._entry = 1;
    }
  }
  var keyValPair = [k, v];
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
  if (bucket.length === 0) {
    this._entry--;
    if((this._entry * 0.25) <= this._limit){
      this.rehash(false);
    }
  }
  return result;
};

HashTable.prototype.rehash = function(up){
  var newArray = [];
  this._entry = 0;
  for(var i = 0; i < this._limit; i++){
    if(this._storage[i]){
      var bucket = this._storage[i.toString()];
      for(var j = 0; j < bucket.length; j++){
        var key = bucket[j][0];
        var value = bucket[j][1];
        var keyValPair = [key, value];
        newArray.push(keyValPair);
      }
    delete this._storage[i];
    }
  }
  up ? (this._limit = this._limit * 2) : (this._limit = this._limit / 2) ;
  for (var i = 0; i < newArray.length; i++) {
    this.insert(newArray[i][0], newArray[i][0]);
  };
  debugger;
};