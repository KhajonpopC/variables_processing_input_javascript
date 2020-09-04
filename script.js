var number1=Number(prompt("What is your Bill?"));
var tax= (number1*.07); 
var tip= (number1 +tax)*.05;
var totalbill= number1+tax+tip;
document.body.querySelector("#cool").innerHTML =totalbill;