function sum(x) {
  return function (y) {
    return y ? sum(x + y) : x;
  };
}

console.log(sum(5)(2)());
