let cp=0,up=0;
let str="";
let inputelement;
function playGame(){
document.getElementById("play").removeEventListener('click',play);
inputelement=Number(document.getElementById("inputval").value);
document.getElementById("roundleft").innerHTML=inputelement;
document.getElementById("up").innerHTML=up;
document.getElementById("cp").innerHTML=cp;
}
function rockplay(){
  if(inputelement>0){
    const computerOptions = ["ROCK","PAPER","SCISSORS"];
 const choiceno= Math.floor(Math.random()*3);
const computerChoice = computerOptions[choiceno];
const compelement=document.getElementById("demo");
compelement.innerHTML=computerChoice;
const r=document.getElementById("rock").textContent;
if(r=="ROCK") {
    if(computerChoice == "ROCK") {
       str="tie";
     } else if(computerChoice == "SCISSORS") {
       str="player wins";
       up++;
     }
     else{
         str="computer win";
         cp++;
     }
}
document.getElementById("up").innerHTML=up;
document.getElementById("cp").innerHTML=cp;
document.getElementById("rr").innerHTML=str;
inputelement=inputelement-1;
document.getElementById("roundleft").innerHTML=inputelement;
if(inputelement==0)
{
  if(up==cp)
document.getElementById("gr").innerHTML="This game is tied";
else if(up>cp)
document.getElementById("gr").innerHTML="This game is won by Player";
else
document.getElementById("gr").innerHTML="This game is won by computer";
document.getElementById("restart").style.display="block";
}
}
}
function paperplay(){
  if(inputelement>0){
    const computerOptions = ["ROCK","PAPER","SCISSORS"];
 const choiceno= Math.floor(Math.random()*3);
const computerChoice = computerOptions[choiceno];
const compelement=document.getElementById("demo");
compelement.innerHTML=computerChoice;
const r=document.getElementById("paper").textContent;
if(r=="PAPER") {
    if(computerChoice == "ROCK") {
       str="Player won";
       up++;
     } else if(computerChoice == "SCISSORS") {
       str="Computer wins";
       cp++;
     }
     else{
         str="tie";
     }
}
document.getElementById("up").innerHTML=up;
document.getElementById("cp").innerHTML=cp;
document.getElementById("rr").innerHTML=str;
inputelement=inputelement-1;
document.getElementById("roundleft").innerHTML=inputelement;
if(inputelement==0)
{
  if(up==cp)
document.getElementById("gr").innerHTML="This game is tied";
else if(up>cp)
document.getElementById("gr").innerHTML="This game is won by Player";
else
document.getElementById("gr").innerHTML="This game is won by computer";
document.getElementById("restart").style.display="block";
}
}
}
function scissorsplay(){
  if(inputelement>0){
const computerOptions = ["ROCK","PAPER","SCISSORS"];
const choiceno= Math.floor(Math.random()*3);
const computerChoice = computerOptions[choiceno];
const compelement=document.getElementById("demo");
compelement.innerHTML=computerChoice;
const r=document.getElementById("scissors").textContent;
if(r=="SCISSORS") {
    if(computerChoice == "ROCK") {
       str="Computer won";
       cp++;
     } else if(computerChoice == "PAPER") {
       str="player wins";
       up++;
     }
     else{
         str="tie";
     }
}
document.getElementById("up").innerHTML=up;
document.getElementById("cp").innerHTML=cp;
document.getElementById("rr").innerHTML=str;
inputelement=inputelement-1;
document.getElementById("roundleft").innerHTML=inputelement;
if(inputelement==0)
{
  if(up==cp)
document.getElementById("gr").innerHTML="This game is tied";
else if(up>cp)
document.getElementById("gr").innerHTML="This game is won by Player";
else
document.getElementById("gr").innerHTML="This game is won by computer";
document.getElementById("restart").style.display="block";
}
}
}
