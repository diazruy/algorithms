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

module.exports = insertionSort;
