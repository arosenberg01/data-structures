var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.len = 0;

  _.extend(stack, stackMethods)
  return stack;
};


var stackMethods = {};
stackMethods.push = function(value){
  this.len++;
  this[this.len] = value;

}
stackMethods.pop = function(){
  var result;
  if (this.len > 0) {
    result = this[this.len];
    delete this[this.len];
    this.len--;
  }
  return result;
}
stackMethods.size = function(){
  return this.len;
}

