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
