function quicksort(values, start, end) {
  var partitions, pivotPos;
  if(typeof start == 'undefined') start = 0;
  if(typeof end == 'undefined') end = values.length - 1;
  if(start < end) {
    pivotPos = partition(values, start, end);
    quicksort(values, start, pivotPos - 1);
    quicksort(values, pivotPos + 1, end);
  }
  return values;
};

function partition(values, start, end) {
  var i, temp,
    pivotPos = start - 1,
    pivotVal = values[end];
  for(i = start; i < end; i++) { // Swap if less than pivot
    if(values[i] <= pivotVal) {
      pivotPos++;
      temp = values[i];
      values[i] = values[pivotPos];
      values[pivotPos] = temp;
    }
  }
  pivotPos++; // IMPORTANT
  temp = values[end];
  values[end] = values[pivotPos]; //
  values[pivotPos] = temp;
  return pivotPos;
};

module.exports = quicksort;
