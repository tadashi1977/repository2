let size = 100;
let line = " ";

for (let row = 1; row <= size; row++) {
  if (row % 2 != 0) {
    for (let col = 1; col < size; col++) {
    	if (col% 2 != 0) {
          line += '#';
        }
      	else if (col % 2 == 0) {
          line += ' ';
        }
    }
    console.log(line);
    col = 1;
    line = " "
  }
  else if (row % 2 == 0) {
    line = "#";
    for (let col = 1; col < size; col++) {
    	if (col% 2 != 0) {
          line += ' ';
        }
      	else if (col % 2 == 0) {
          line += '#';
        }      
    }
    console.log(line);
    col = 1;
    line = " "
  }
}