var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0;
};

Stack.prototype.push = function(value) {
  this[this.len] = value;
  this.len++;
};

Stack.prototype.pop = function() {
  var result;

  if (this.len > 0) {
    this.len--;
    result = this[this.len];
    delete this[this.len];
  }
  return result;
};

Stack.prototype.size = function() {
  return this.len;
};






