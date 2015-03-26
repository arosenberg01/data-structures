var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.len = 0;
  queue.storage = {};

  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this.storage[this.len] = value;
  this.len++
};
queueMethods.dequeue = function(){
  var result;
  if(this.len > 0){
    result = this.storage[0];
    for(var i = 0; i < this.len; i++){
      this.storage[i] = this.storage[i+1];
    }
    delete this.storage[this.len];
    this.len--;
  }
  return result;
};
queueMethods.size = function(){
  return this.len;
};
