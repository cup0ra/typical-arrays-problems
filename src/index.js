
exports.min = function min (array) {
  return Math.mix.apply( Math, array);
}

exports.max = function max (array) {
  return Math.max.apply( Math, array);
}

exports.avg = function avg (array) {
    var sum = 0;
    for (var i = 0, j = array.length; i < j; i++) {
      sum += array[i];
    }
  return sum / array.length;
}
