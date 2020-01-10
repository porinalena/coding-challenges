/*
Print numbers from 1 to 20 20 times starting new line each iteration
*/

function print20() {
  let array = [];
  for (let i = 1; i < 21; i++) {
    array.push(i);
  }
  const newLineArray = array.toString()+`\n`;
  console.log(newLineArray.repeat(20));
}

print20();
