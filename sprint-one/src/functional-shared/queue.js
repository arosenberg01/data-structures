var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new styl
  var queue = {};
  queue.len = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  this[this.len] = value;

  this.len++;

}
queueMethods.dequeue = function(){
  if (this.len > 0) {
    var result = this[0];
    for (var i = 0; i < this.len; i++) {
      var j = i + 1;
      this[i] = this[j];
    }
    delete this[this.len];
    this.len--;
  }
  return result;
}
queueMethods.size = function(){
  console.log(this.len);
  return this.len;
}


