function mergeSort(values, start, end) {
  var middle;
  if(typeof start == 'undefined') start = 0;
  if(typeof end == 'undefined') end = values.length - 1;
  if(start < end) {
    middle = start + Math.floor((end - start)/2);
    mergeSort(values, start, middle);
    mergeSort(values, middle + 1, end);
    merge(values, start, middle, end);
  }
  return values;
};

function merge(values, start, middle, end) {
  var a, b;
  var listA = values.slice(start, middle + 1);
  var listB = values.slice(middle + 1, end + 1);
  var i = start;
  while(listA.length > 0 && listB.length > 0) {
    a = listA[0];
    b = listB[0];
    if(a < b) {
      values[i] = listA.shift();
    } else {
      values[i] = listB.shift();
    }
    i++;
  }
  while(listA.length > 0) {
    values[i] = listA.shift();
    i++;
  }
  while(listB.length > 0) {
    values[i] = listB.shift();
    i++;
  }
}

module.exports = mergeSort;
