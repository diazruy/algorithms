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

module.exports = selectionSort;
