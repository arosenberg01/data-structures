var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if (size > 0) {
      var result = storage[0];
      for (var index in storage) {
        var i = parseInt(index + 1);
        storage[index] = storage[i];
      }
      delete storage[size];
      size--;
    }
    return result;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
