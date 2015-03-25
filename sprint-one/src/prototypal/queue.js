var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.len = 0;

  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this[this.len] = value;
  this.len++
};
queueMethods.dequeue = function(){
  var result;
  if(this.len > 0){
    result = this[0];
    for(var i = 0; i < this.len; i++){
      this[i] = this[i+1];
    }
    delete this[this.len];
    this.len--;
  }
  return result;
};
queueMethods.size = function(){
  return this.len;
};
