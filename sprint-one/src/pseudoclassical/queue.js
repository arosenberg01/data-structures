var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
};

Queue.prototype.enqueue = function(value){
  this[this.len] = value;
  this.len++;
};

Queue.prototype.dequeue = function(){
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

Queue.prototype.size = function(){
  return this.len;
}
