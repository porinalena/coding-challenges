function print20() {
  let array = [];
  let i = 1;
  let x = 1;
  for (i; i < 21; i++) {
    array.push(i);
  }
  do {
    x++;
    console.log(array.toString());
   } while (x < 21);
}

print20();
