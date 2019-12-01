//Get the id's of the boxes
const box1=document.getElementById("box1");
const box2=document.getElementById("box2");
const box3=document.getElementById("box3");
const box4=document.getElementById("box4");
const box5=document.getElementById("box5");
const box6=document.getElementById("box6");
const box7=document.getElementById("box7");
const box8=document.getElementById("box8");
const box9=document.getElementById("box9");
const iWant = document.getElementById("iWant");
const play = document.getElementById("play");
const content=document.getElementsByClassName("content");
const game = document.getElementsByClassName("game");

var selected = "X";
var compSelected = "O";
//Declare variables for each of the boxes so that we can use the values to compute the logic later
var one,two,three,four,five,six,seven,eight,nine = "";
var whoseTurn = "0";
var randomItem = 0;
var element="box";

function getXorO(selected,compSelected){

    //Get the id and value of the question
const selectX = document.getElementById("selectX");
const selectO = document.getElementById("selectO");

//Check to see if X or O is selected

if (selectO.checked){

    selected = selectO.value;
    iWant.firstChild.nodeValue = selectO.value;
    compSelected = "X";
    //console.log(selected);
}else{
    selected = selectX.value;
    iWant.firstChild.nodeValue = selectX.value;
    compSelected = "O";
    //console.log(selected);
}
//console.log(selected);
//console.log(compSelected);
play.disabled = true;
//Display the game board
game[0].style.display = "block";

return selected,compSelected;
}
//Check if it is the computer's turn
//generateRandomNumber();
//    console.log(randomItem);
function runGame(){
        //for(var i=0;i<5;i++){
    //Making each of the boxes clickable and adding content to it when clicked
            box1.addEventListener("click",function(){
                //getWhichElementIsClicked();
                box1.childNodes[0].firstChild.nodeValue = selected;
                one = selected;
                console.log(box1.childNodes[0].firstChild.nodeValue);
                box1.style.pointerEvents = "none";
                return;
            });

            box2.addEventListener("click",function(){

                box2.childNodes[0].firstChild.nodeValue = selected;
                two = selected;
                console.log(box2.childNodes[0].firstChild.nodeValue);
                //console.log(two);
                box2.style.pointerEvents = "none";
                return;
            });
            box3.addEventListener("click",function(){

                box3.childNodes[0].firstChild.nodeValue = selected;
                three = selected;
                console.log(box3.childNodes[0].firstChild.nodeValue);
                //console.log(three);
                box3.style.pointerEvents = "none";
                return;
            });
            box4.addEventListener("click",function(){
                box4.childNodes[0].firstChild.nodeValue = selected;
                four = selected;
                console.log(box4.childNodes[0].firstChild.nodeValue);
                //console.log(four);
                box4.style.pointerEvents = "none";
                return;
            });
            box5.addEventListener("click",function(){
                box5.childNodes[0].firstChild.nodeValue = selected;
                five = selected;
                console.log(box5.childNodes[0].firstChild.nodeValue);
                //console.log(five);
                box5.style.pointerEvents = "none";
                return;
            });
            box6.addEventListener("click",function(){
                box6.childNodes[0].firstChild.nodeValue = selected;
                six = selected;
                console.log(box6.childNodes[0].firstChild.nodeValue);
                //console.log(six);
                box6.style.pointerEvents = "none";
                return;
            });
            box7.addEventListener("click",function(){
                box7.childNodes[0].firstChild.nodeValue = selected;
                seven = selected;
                console.log(box7.childNodes[0].firstChild.nodeValue);
                //console.log(seven);
                box7.style.pointerEvents = "none";
                return;
            });
            box8.addEventListener("click",function(){
                box8.childNodes[0].firstChild.nodeValue = selected;
                eight = selected;
                console.log(box8.childNodes[0].firstChild.nodeValue);
                //console.log(eight);
                box8.style.pointerEvents = "none";
                return;
            });
            box9.addEventListener("click",function(){
                box9.childNodes[0].firstChild.nodeValue = selected;
                nine = selected;
                console.log(box9.childNodes[0].firstChild.nodeValue);
                //console.log(nine);
                box9.style.pointerEvents = "none";
                return;
            });
    //}
}

function computersTurn(){
    generateRandomNumber();
    element = element+randomItem;
    //console.log("element = "+element);
    //console.log("comp select ="+compSelected);
    //console.log("comp selected ="+selected);
    //element.childNodes[0].firstChild.nodeValue = compSelected;
    //setTimeout(function(){ element.childNodes[0].firstChild.nodeValue = compSelected; }, 1000);
    //element.childNodes[0].firstChild.nodeValue = compSelected;
}

function getWhichElementIsClicked(){
    //console.log(box1.id);
}

function generateRandomNumber(){
    randomItem = Math.floor(Math.random() * 9) + 1;
    //console.log(randomItem);
}

//Window load event resets all defaults
window.addEventListener("load",(event) => {
    var p1 = "X";
    var p2 = "O";
    play.disabled = false;
    play.addEventListener("click",function(){
        getXorO(p1,p2);
        console.log("selected ="+p1);
    console.log("other ="+p2);
    });

    runGame();
    computersTurn();
});


