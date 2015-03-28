var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // this._entry = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if(!bucket){
    bucket = [];
  }
  var tuple = [k, v];
  bucket.push(tuple);
  this._storage.set(i, bucket);
  //   this._storage[i] = [];
  //   this._entry++;
  //   if(this._entry >= this._limit * 0.75){
  //     this.rehash(true);
  //     i = getIndexBelowMaxForKey(k, this._limit);
  //     this._storage[i] = [];
  //     this._entry = 0;
  //   }
  // }
  // var keyValPair = [k, v];
  // this._storage[i].push(keyValPair);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;
  if(!bucket){
    return null;
  }
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      result = bucket[j][1];
    }
  }
  return result;
  // var bucket = this._storage[i]
  // var result = null;
  // // debugger;
  // if(!bucket){return result};
  // for(var j = 0; j < bucket.length; j++){
  //   if(bucket[j][0] === k){
  //     result = bucket[j][1];
  //     break;
  //   }
  // }
  // return result;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var result = null;
  if(!bucket){
    return result;
  }
  for(var j = 0; j < bucket.length; j++){
    if(bucket[j][0] === k){
      result = bucket.splice(j, 1);
    }
  }
  console.log(result);
  return result;
  // var bucket = this._storage[i];
  // var result = null;
  // var newBucket = [];
  // for(var j = 0; j < bucket.length; j++){
  //   if(bucket[j][0] === k){
  //     result = bucket[j][1];
  //   } else {
  //     newBucket.push(bucket[j]);
  //   }
  // };

  // debugger;
  // this._storage[i] = newBucket;
  // bucket = newBucket;

  // if (bucket.length === 0) {
  //   // debugger;
  //   delete this._storage[i];
  //   this._entry--;
  //   if((this._entry * 0.25) <= this._limit){
  //     this.rehash(false);
  //   }
  // }
  // return result;
};

// HashTable.prototype.rehash = function(up){
//   var newArray = [];
//   this._entry = 0;
//   for(var i = 0; i < this._limit; i++){
//     if(this._storage[i]){
//       var bucket = this._storage[i.toString()];
//       for(var j = 0; j < bucket.length; j++){
//         var key = bucket[j][0];
//         var value = bucket[j][1];
//         var keyValPair = [key, value];
//         newArray.push(keyValPair);
//       }
//     delete this._storage[i];
//     }
//   }
//   up ? (this._limit = this._limit * 2) : (this._limit = this._limit / 2) ;
//   for (var i = 0; i < newArray.length; i++) {
//     this.insert(newArray[i][0], newArray[i][1]);
//   };
//   // debugger;
// };
