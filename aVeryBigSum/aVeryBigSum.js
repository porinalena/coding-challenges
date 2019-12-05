function aVeryBigSum(ar) {
  let total = 0;
  for (let arIndex = 0; arIndex < ar.length; arIndex++) {
    total += ar[arIndex];
  }
  return total;
}

let ar = [1000000005, 1000000007, 5000000000, 1000000004];
aVeryBigSum(ar);
