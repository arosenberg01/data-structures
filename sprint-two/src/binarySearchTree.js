var BinarySearchTree = function(value){
  var obj = {};
  obj.left;
  obj.right;
  obj.value = value;
  _.extend(obj, BinarySearchTreeMethods);

  return obj;
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(v){
  if(this.value !== v){
    if(v > this.value){
      if(this.right){
        this.right.insert(v);
      } else {
        this.right = BinarySearchTree(v);
      }
    } else {
      if(this.left){
        this.left.insert(v);
      } else {
        this.left = BinarySearchTree(v);
      }
    }
  }
};

BinarySearchTreeMethods.contains = function(v){
  if(this.value === v){
    return true;
  } else if(v > this.value){
    if(this.right){
      return this.right.contains(v);
    } else {
      return false;
    }
  } else {
    if(this.left){
      return this.left.contains(v);
    } else {
      return false;
    }
  }
};

BinarySearchTreeMethods.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left){
    this.left.depthFirstLog(cb);
  } else if(this.right){
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
