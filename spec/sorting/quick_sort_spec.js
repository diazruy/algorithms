var quickSort = require('../../src/sorting/quick_sort.js');

describe('Quicksort', function(){
  it('sorts the input', function(){
    var input = [4,6,2,7,5,8,1,9,3]
    var expected = [1,2,3,4,5,6,7,8,9]
    expect(quickSort(input)).toEqual(expected)
  });
});
