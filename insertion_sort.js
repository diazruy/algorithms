var input = [4,6,2,7,5,8,1,9,3]
var expected = [1,2,3,4,5,6,7,8,9]

function insertionSort(values) {
  var i, j;
  for(i = 1; i < values.length; i++) {
    for(j = i; j > 0; j--) {
      if(values[j-1] > values[j]){
        temp = values[j-1];
        values[j-1] = values[j];
        values[j] = temp;
      }
    }
  }
  return values;
}

console.log(input);
console.log(insertionSort(input));
var areEqual = true;

expected.forEach(function(value, index){
  if(input[index] != value) {
    areEqual = false;
    return;
  }
});
console.log(areEqual ? 'PASS' : 'FAIL')
