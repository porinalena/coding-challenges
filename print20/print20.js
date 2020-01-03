// function print20() {
//   let array = [];
//   let i = 1;
//   let x = 1;
//   for (i; i < 21; i++) {
//     array.push(i);
//   }
//   do {
//     x++;
//     console.log(array.toString());
//    } while (x < 21);
// }

// print20();

function print20() {
  let array = [];
  for (let i = 1; i < 21; i++) {
    array.push(i);
  }
  const newLineArray = array.toString()+`\n`;
  console.log(newLineArray.repeat(20));
}

print20();
