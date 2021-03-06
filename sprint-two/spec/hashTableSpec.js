describe('hashTable', function() {
  var hashTable;
  var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Todd', 'Anderson'], ['Doctor', 'Horrible'], ['fat', 'chance'], ['Dr.', 'Sunshine'], ['Magic', 'Johnson'], ['John', 'Resig'],  ['Brendan', 'Eich'], ['Alan', 'Turing']];


  beforeEach(function() {
    hashTable = new HashTable();
  });

  it('should have methods named "insert", "remove", and "retrieve', function() {
    expect(hashTable.insert).to.be.a("function");
    expect(hashTable.remove).to.be.a("function");
    expect(hashTable.retrieve).to.be.a("function");
  });

  it('should store values that were inserted', function() {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).to.equal('Seagal');
  });

  it('should not contain values that were not inserted', function() {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
  });
  it('should not contain values that were removed', function() {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).to.equal(null);
  });

  it('should handle hash function collisions', function(){
    var v1 = "val1";
    var v2 = "val2";
    var oldHashFunction = window.getIndexBelowMaxForKey;
    window.getIndexBelowMaxForKey = function() { return 0; };
    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).to.equal(v1);
    expect(hashTable.retrieve(v2)).to.equal(v2);
    window.getIndexBelowMaxForKey = oldHashFunction;
  });

  // (Extra credit! Remove the extra "x" when you want the following tests to run)
  it('should double in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
  });

  it('should halve in size when needed', function() {
    _.each(people, function(person) {
      var firstName = person[0], lastName = person[1];
      hashTable.insert(firstName,lastName);
    });
    expect(hashTable._limit).to.equal(16);
    hashTable.remove('George'); // 7
    hashTable.remove('Dr.'); // 4
    hashTable.remove('Steven'); // 11
    hashTable.remove('Magic'); // 1
    hashTable.remove('Doctor'); // 5
    hashTable.remove('John'); // 15
    hashTable.remove('Mr.'); // 13
    expect(hashTable._limit).to.equal(8);
  });
});
