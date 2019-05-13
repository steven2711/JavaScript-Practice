// Pyramids

// Full block pyramid
/*
var num = 10;
var pyrm = "";

for (var i = 0; i < num; i++) {
  for (var y = 0; y < num; y++) {
    pyrm += "#"

  }

    pyrm += "\n";
}

console.log(pyrm);
*/

//Full pyramid formation
/*
var rows = 20;
var output="";
for(var i = 0;i < rows; i++) {

    for(var j=0;j<rows-i;j++) {
        output+=" ";
    }
    for(var k=0;k<=i;k++) {
       output += "* ";
    }
    output += "\n";
}
console.log(output);
*/

/////// Half Pyramid Formation (Staircase) ///////////

function createHalfPyramid(height) {
  for (var i = 1; i <= height; i++) {
    var row = "";

    for (var j = 1; j <= height - i; j++) {
      row += " ";
    }

    for (var k = 1; k <= i; k++) {
      row += "*";
    }

    console.log(row);
  }
}

createHalfPyramid(10);
