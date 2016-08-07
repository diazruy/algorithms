
var input = [4,6,2,7,5,8,1,9,3]
var expected = [1,2,3,4,5,6,7,8,9]

function selectionSort(values) {
  var i, j, temp, min;
  for(i = 0; i < values.length; i++) {
    var min = i;
    for(j = i+1; j < values.length; j++) {
      if(values[j] < values[min]) {
        min = j;
      }
    }
    temp = values[min];
    values[min] = values[i];
    values[i] = temp;
  }
  return values;
};

console.log(input);
console.log(selectionSort(input));
var areEqual = true;

expected.forEach(function(value, index){
  if(input[index] != value) {
    areEqual = false;
    return;
  }
});
console.log(areEqual ? 'PASS' : 'FAIL')
