var random = function(max) {
  return Math.floor(Math.random() * max) + 1;
};

//get all the number div's
var numbers = document.querySelectorAll(".number");
//loop through all the div's and allocate a random number
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.innerHTML = random(9);
}
//checking for matched
var matchRow = function(base) {
  var matchCount = 0;
  if (numbers[base].innerHTML === numbers[base + 1].innerHTML) {
    document.getElementById("rowMatch").innerHTML = " match ";
    numbers[base].classList.add("highlight");
    numbers[base + 1].classList.add("highlight");
    matchCount++;
  }
  if (numbers[base + 1].innerHTML === numbers[base + 2].innerHTML) {
   document.getElementById("rowMatch").innerHTML =  " match ";
    //alert("bottom match!");
    numbers[base + 1].classList.add("highlight");
    numbers[base + 2].classList.add("highlight");
    matchCount++;
  }
  if (numbers[base].innerHTML === numbers[base + 2].innerHTML) {
    document.getElementById("rowMatch").innerHTML =  " match ";
    //alert("all match!");
    numbers[base].classList.add("highlight");
    numbers[base + 2].classList.add("highlight");
    matchCount++;
  }
  return matchCount;
};

var matchColumn = function(base) {
  var matchCount = 0;
  if (numbers[base].innerHTML === numbers[base + 3].innerHTML) {
    document.getElementById("columnMatch").innerHTML = " match ";
    numbers[base].classList.add("highlightColumn");
    numbers[base + 3].classList.add("highlightColumn");
    matchCount++;
  }
  if (numbers[base + 3].innerHTML === numbers[base + 6].innerHTML) {
    document.getElementById("columnMatch").innerHTML = " match ";
    numbers[base + 3].classList.add("highlightColumn");
    numbers[base + 6].classList.add("highlightColumn");
    matchCount++;
  }
  if (numbers[base].innerHTML === numbers[base + 6].innerHTML) {
    document.getElementById("columnMatch").innerHTML = " match ";
    numbers[base].classList.add("highlightColumn");
    numbers[base + 6].classList.add("highlightColumn");
    matchCount++;
  }
  return matchCount;
};
var matchDiagonal1 = function(base) {
  var matchCount = 0;
  if (numbers[base].innerHTML === numbers[base + 4].innerHTML) {
    document.getElementById("diagnalMatch").innerHTML = " match ";
    numbers[base].classList.add("highlightDiagonal");
    numbers[base + 4].classList.add("highlightDiagonal");
    matchCount++;
  }
  if (numbers[base + 4].innerHTML === numbers[base + 8].innerHTML) {
    document.getElementById("diagnalMatch").innerHTML = " match ";
    numbers[base].classList.add("highlightDiagonal");
    numbers[base + 4].classList.add("highlightDiagonal");
    matchCount++;
  }
  if (numbers[base].innerHTML === numbers[base + 8].innerHTML) {
    document.getElementById("diagnalMatch").innerHTML = " match ";
    numbers[base].classList.add("highlightDiagonal");
    numbers[base + 4].classList.add("highlightDiagonal");
    //  matchCount++;
  }
  return matchCount;
};
var matchDiagonal2 = function(base) {
  var matchCount = 0;
  if (numbers[base + 2].innerHTML === numbers[base + 4].innerHTML) {
    document.getElementById("diagnalMatch").innerHTML = " match ";
    numbers[base + 2].classList.add("highlightDiagonal");
    numbers[base + 4].classList.add("highlightDiagonal");
    matchCount++;
  }
  if (numbers[base + 4].innerHTML === numbers[base + 6].innerHTML) {
    document.getElementById("diagnalMatch").innerHTML = " match ";
    numbers[base + 4].classList.add("highlightDiagonal");
    numbers[base + 6].classList.add("highlightDiagonal");
    matchCount++;
  }
  if (numbers[base + 2].innerHTML === numbers[base + 6].innerHTML) {
    document.getElementById("diagnalMatch").innerHTML = " match ";
    numbers[base + 2].classList.add("highlightDiagonal");
    numbers[base + 6].classList.add("highlightDiagonal");
    matchCount++;
  }
  return matchCount;
};
var matches = matchDiagonal1(0);
var matches = matchDiagonal2(2);

var matches = matchColumn(0);
var matches = matchColumn(1);
var matches = matchColumn(2);

var matches = matchRow(0);
var matches = matchRow(3);
var matches = matchRow(6);
