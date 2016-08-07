selectionSort = require('../src/selection_sort.js');
describe('selectionSort', function(){
  it('sorts the input', function() {
    var input = [4,6,2,7,5,8,1,9,3]
    var expected = [1,2,3,4,5,6,7,8,9]
    expect(selectionSort(input)).toEqual(expected)
  })
})
