function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var rand1 = getRandomIntInclusive(1, 9);
document.getElementById("div1").innerHTML = rand1;
var rand2 = getRandomIntInclusive(1, 9);
document.getElementById("div2").innerHTML = rand2;
var rand3 = getRandomIntInclusive(1, 9);
document.getElementById("div3").innerHTML = rand3;
var rand4 = getRandomIntInclusive(1, 9);
document.getElementById("div4").innerHTML = rand4;
var rand5 = getRandomIntInclusive(1, 9);
document.getElementById("div5").innerHTML = rand5;
var rand6 = getRandomIntInclusive(1, 9);
document.getElementById("div6").innerHTML = rand6;
var rand7 = getRandomIntInclusive(1, 9);
document.getElementById("div7").innerHTML = rand7;
var rand8 = getRandomIntInclusive(1, 9);
document.getElementById("div8").innerHTML = rand8
var rand9 = getRandomIntInclusive(1, 9);
document.getElementById("div9").innerHTML = rand9;




//row1
if (rand1 === rand2) {
  document.getElementById("rowMatch").innerHTML = rand1 + " match ";
  document.getElementById("div1").classList.add("highlight");
  document.getElementById("div2").classList.add("highlight");
  document.getElementById("div1").style.color = "blue";
  document.getElementById("div2").style.color = "blue";
}
  if (rand2 === rand3) {
  document.getElementById("rowMatch").innerHTML = rand2 + " match ";
  document.getElementById("div2").classList.add("highlight");
  document.getElementById("div3").classList.add("highlight");
  document.getElementById("div2").style.color = "blue";
  document.getElementById("div3").style.color = "blue";

}
 if (rand1 === rand3) {
  document.getElementById("rowMatch").innerHTML = rand3 + " match ";
  document.getElementById("div1").classList.add("highlight");
  document.getElementById("div3").classList.add("highlight");
  document.getElementById("div1").style.color = "blue";
  document.getElementById("div3").style.color = "blue";
  //row1
}

//row2
 if (rand4 === rand5) {
  document.getElementById("rowMatch").innerHTML = rand4 + " match ";
  document.getElementById("div4").classList.add("highlight");
  document.getElementById("div5").classList.add("highlight");
  document.getElementById("div4").style.color = "blue";
  document.getElementById("div5").style.color = "blue";

}
 if (rand5 === rand6) {
  document.getElementById("rowMatch").innerHTML = rand5 + " match ";
  document.getElementById("div5").classList.add("highlight");
  document.getElementById("div6").classList.add("highlight");
  document.getElementById("div5").style.color = "blue";
  document.getElementById("div6").style.color = "blue";



}
  if (rand4 === rand6) {
  document.getElementById("rowMatch").innerHTML = rand6 + " match ";
  document.getElementById("div4").classList.add("highlight");
  document.getElementById("div6").classList.add("highlight");
  document.getElementById("div4").style.color = "blue";
  document.getElementById("div6").style.color = "blue";

  //row2
}

//row3

 if (rand7 === rand8) {
  document.getElementById("rowMatch").innerHTML = rand7 + " match ";
  document.getElementById("div7").classList.add("highlight");
  document.getElementById("div8").classList.add("highlight");
  document.getElementById("div7").style.color = "blue";
  document.getElementById("div8").style.color = "blue";

}
 if (rand8 === rand9) {
  document.getElementById("rowMatch").innerHTML = rand8 + " match ";
  document.getElementById("div8").classList.add("highlight");
  document.getElementById("div9").classList.add("highlight");
  document.getElementById("div8").style.color = "blue";
  document.getElementById("div9").style.color = "blue";


}
if (rand7 === rand9) {
  document.getElementById("rowMatch").innerHTML = rand9 + " match ";
  document.getElementById("div7").classList.add("highlight");
  document.getElementById("div9").classList.add("highlight");
  document.getElementById("div7").style.color = "blue";
  document.getElementById("div9").style.color = "blue";

  //row3
}



//column1
if (rand1 === rand4) {
  document.getElementById("col1Match").innerHTML = rand1 + " match ";
  document.getElementById("div1").classList.add("highlightcolumn");
  document.getElementById("div4").classList.add("highlightcolumn");
  document.getElementById("div4").style.color = "white";
  document.getElementById("div3").style.color = "white";


}
  if (rand4 === rand7) {
  document.getElementById("Col1Match").innerHTML = rand4 + " match ";
  document.getElementById("div4").classList.add("highlightcolumn");
  document.getElementById("div7").classList.add("highlightcolumn");
  document.getElementById("div4").style.color = "white";
  document.getElementById("div7").style.color = "white";


}
  if (rand1 === rand7) {
  document.getElementById("col1Match").innerHTML = rand7 + " match ";
  document.getElementById("div1").classList.add("highlightcolumn");
  document.getElementById("div7").classList.add("highlightcolumn");
  document.getElementById("div1").style.color = "white";
  document.getElementById("div7").style.color = "white";

  //column1
}

//column2
 if (rand2 === rand5) {
  document.getElementById("col1Match").innerHTML = rand4 + " match ";
  document.getElementById("div2").classList.add("highlightcolumn");
  document.getElementById("div5").classList.add("highlightcolumn");
  document.getElementById("div2").style.color = "white";
  document.getElementById("div5").style.color = "white";
}
 if (rand5 === rand8) {
  document.getElementById("col1Match").innerHTML = rand5 + " match ";
  document.getElementById("div5").classList.add("highlightcolumn");
  document.getElementById("div8").classList.add("highlightcolumn");
  document.getElementById("div5").style.color = "white";
  document.getElementById("div8").style.color = "white";
}
  if (rand2 === rand8) {
  document.getElementById("col1Match").innerHTML = rand6 + " match ";
  document.getElementById("div2").classList.add("highlightcolumn");
  document.getElementById("div8").classList.add("highlightcolumn");
  document.getElementById("div2").style.color = "white";
  document.getElementById("div8").style.color = "white";

  //column2
}

//column3
 if (rand3 === rand6) {
  document.getElementById("col1Match").innerHTML = rand7 + " match ";
  document.getElementById("div3").classList.add("highlightcolumn");
  document.getElementById("div6").classList.add("highlightcolumn");
  document.getElementById("div3").style.color = "white";
  document.getElementById("div6").style.color = "white";

}
 if (rand6 === rand9) {
  document.getElementById("col1Match").innerHTML = rand8 + " match ";
  document.getElementById("div6").classList.add("highlightcolumn");
  document.getElementById("div9").classList.add("highlightcolumn");
  document.getElementById("div6").style.color = "white";
  document.getElementById("div9").style.color = "white";


}
 if (rand3 === rand9) {
  document.getElementById("col1Match").innerHTML = rand9 + " match ";
  document.getElementById("div3").classList.add("highlightcolumn");
  document.getElementById("div9").classList.add("highlightcolumn");
  document.getElementById("div3").style.color = "white";
  document.getElementById("div9").style.color = "white";

  //column3
}



//diagnal1
if (rand1 === rand5) {
  document.getElementById("diagnalMatch").innerHTML = rand1 + " match ";
  document.getElementById("div1").classList.add("highlightdiagnal");
  document.getElementById("div5").classList.add("highlightdiagnal");
  document.getElementById("div1").style.color = "blue";
  document.getElementById("div5").style.color = "blue";

  console.log(rand1);
}
 if (rand5 === rand9) {
  document.getElementById("diagnalMatch").innerHTML = rand5 + " match ";
  document.getElementById("div5").classList.add("highlightdiagnal");
  document.getElementById("div9").classList.add("highlightdiagnal");
  document.getElementById("div5").style.color = "blue";
  document.getElementById("div9").style.color = "blue";

  console.log(rand5);

}
 if (rand1 === rand9) {
  document.getElementById("diagnalMatch").innerHTML = rand9 + " match ";
  document.getElementById("div1").classList.add("highlightdiagnal");
  document.getElementById("div9").classList.add("highlightdiagnal");
  document.getElementById("div1").style.color = "blue";
  document.getElementById("div9").style.color = "blue";
  console.log(rand9);
  //diagnal1
}

//diagnal2

 if (rand3 === rand5) {
  document.getElementById("diagnalMatch").innerHTML = rand3 + " match ";
  document.getElementById("div3").classList.add("highlightdiagnal");
  document.getElementById("div5").classList.add("highlightdiagnal");
  document.getElementById("div3").style.color = "blue";
  document.getElementById("div5").style.color = "blue";

  console.log(rand3);
}
 if (rand5 === rand7) {
  document.getElementById("diagnalMatch").innerHTML = rand5 + " match ";
  document.getElementById("div5").classList.add("highlightdiagnal");
  document.getElementById("div7").classList.add("highlightdiagnal");
  document.getElementById("div5").style.color = "blue";
  document.getElementById("div7").style.color = "blue";

  console.log(rand5);
}
 if (rand3 === rand7) {
  document.getElementById("diagnalMatch").innerHTML = rand7 + " match ";
  document.getElementById("div3").classList.add("highlightdiagnal");
  document.getElementById("div7").classList.add("highlightdiagnal");
  document.getElementById("div3").style.color = "blue";
  document.getElementById("div7").style.color = "blue";
  console.log(rand7);
  //diagnal2
}
