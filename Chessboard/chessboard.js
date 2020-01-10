/*
Write a program that creates a string that represents an 8×8 grid,
using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.
*/

function chessboard() {
  let line;
  let character;
  const size = 8;
  for (line = 1; line <= size; line++) {
    let result = '';
    for (character = 1; character <= size; character++) {
      if ((character + line) % 2 === 0) {
        result = result + ' ';
      } else {
        result = result + '#';
      }
    } console.log(result = result + '\n')
  }
}

chessboard();
