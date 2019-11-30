//Get the id's of the boxes
box1=document.getElementById("box1");
box2=document.getElementById("box2");
box3=document.getElementById("box3");
box4=document.getElementById("box4");
box5=document.getElementById("box5");
box6=document.getElementById("box6");
box7=document.getElementById("box7");
box8=document.getElementById("box8");
box9=document.getElementById("box9");
iWant = document.getElementById("iWant");
play = document.getElementById("play");
content=document.getElementsByClassName("content");
game = document.getElementsByClassName("game");

play.addEventListener("click",XorO);

var selected = "X";
//Declare variables for each of the boxes so that we can use the values to compute the logic later
var one,two,three,four,five,six,seven,eight,nine = "";
var whoseTurn = "0";
var randomItem = 0;
var element="box";

function XorO(){

//Get the id and value of the question
selectX = document.getElementById("selectX");
selectO = document.getElementById("selectO");

//Check to see if X or O is selected

if (selectO.checked){

    selected = selectO.value;
    iWant.firstChild.nodeValue = selectO.value;
    compSelected = selectX.value;
    //console.log(selected);
}else{
    selected = selectX.value;
    iWant.firstChild.nodeValue = selectX.value;
    compSelected = selectO.value;
    //console.log(selected);
}
play.disabled = true;
//Display the game board
game[0].style.display = "block";
}

//Check if it is the computer's turn
generateRandomNumber();
    console.log(randomItem);

//Making each of the boxes clickable and adding content to it when clicked
box1.addEventListener("click",function(){
    if (whoseTurn == "0"){ //check if it is your turn
    box1.childNodes[0].firstChild.nodeValue = selected;
    one = selected;
    console.log(box1.childNodes[0].firstChild.nodeValue);
    //console.log(one);
    //Make boxes unclickable if it is computer's turn
    box1.style.pointerEvents = "none";
    box2.style.pointerEvents = "none";
    box3.style.pointerEvents = "none";
    box4.style.pointerEvents = "none";
    box5.style.pointerEvents = "none";
    box6.style.pointerEvents = "none";
    box7.style.pointerEvents = "none";
    box8.style.pointerEvents = "none";
    box9.style.pointerEvents = "none";
    whoseTurn = "1";

}else{ //computer's turn
    generateRandomNumber();
    console.log(randomItem);
    element = element+randomItem;
    console.log(element);
    element.childNodes[0].firstChild.nodeValue = compSelected;
    one = compSelected;
    //console.log(box1.childNodes[0].firstChild.nodeValue);
    //console.log(one);

    box2.style.pointerEvents = "auto";
    box3.style.pointerEvents = "auto";
    box4.style.pointerEvents = "auto";
    box5.style.pointerEvents = "auto";
    box6.style.pointerEvents = "auto";
    box7.style.pointerEvents = "auto";
    box8.style.pointerEvents = "auto";
    box9.style.pointerEvents = "auto";
    element.style.pointerEvents = "none";
    whoseTurn = "0";
    //reset value of element
    element = "box";
}
});
box2.addEventListener("click",function(){
    if (whoseTurn == "0"){ //check if it is your turn
    box2.childNodes[0].firstChild.nodeValue = selected;
    two = selected;
    console.log(box2.childNodes[0].firstChild.nodeValue);
    //console.log(two);
    box1.style.pointerEvents = "none";
    box2.style.pointerEvents = "none";
    box3.style.pointerEvents = "none";
    box4.style.pointerEvents = "none";
    box5.style.pointerEvents = "none";
    box6.style.pointerEvents = "none";
    box7.style.pointerEvents = "none";
    box8.style.pointerEvents = "none";
    box9.style.pointerEvents = "none";
    whoseTurn = "1";
}else{ //computer's turn
    generateRandomNumber();
    console.log(randomItem);
    element = element+randomItem;
    element.childNodes[0].firstChild.nodeValue = compSelected;
    two = compSelected;
    //console.log(box1.childNodes[0].firstChild.nodeValue);
    //console.log(one);


    box3.style.pointerEvents = "auto";
    box4.style.pointerEvents = "auto";
    box5.style.pointerEvents = "auto";
    box6.style.pointerEvents = "auto";
    box7.style.pointerEvents = "auto";
    box8.style.pointerEvents = "auto";
    box9.style.pointerEvents = "auto";
    element.style.pointerEvents = "none";
    whoseTurn = "0";
    //reset value of element
    element = "box";
}
});
box3.addEventListener("click",function(){
    if (whoseTurn == "0"){ //check if it is your turn
    box3.childNodes[0].firstChild.nodeValue = selected;
    three = selected;
    console.log(box3.childNodes[0].firstChild.nodeValue);
    //console.log(three);
    box1.style.pointerEvents = "none";
    box2.style.pointerEvents = "none";
    box3.style.pointerEvents = "none";
    box4.style.pointerEvents = "none";
    box5.style.pointerEvents = "none";
    box6.style.pointerEvents = "none";
    box7.style.pointerEvents = "none";
    box8.style.pointerEvents = "none";
    box9.style.pointerEvents = "none";
    whoseTurn = "1";
}else{ //computer's turn
    generateRandomNumber();
    console.log(randomItem);
    element = element+randomItem;
    element.childNodes[0].firstChild.nodeValue = compSelected;
    one = compSelected;
    //console.log(box1.childNodes[0].firstChild.nodeValue);
    //console.log(one);

    box1.style.pointerEvents = "auto";
    box2.style.pointerEvents = "auto";
    box4.style.pointerEvents = "auto";
    box5.style.pointerEvents = "auto";
    box6.style.pointerEvents = "auto";
    box7.style.pointerEvents = "auto";
    box8.style.pointerEvents = "auto";
    box9.style.pointerEvents = "auto";
    element.style.pointerEvents = "none";
    whoseTurn = "0";
    //reset value of element
    element = "box";
}
});
box4.addEventListener("click",function(){
    box4.childNodes[0].firstChild.nodeValue = selected;
    four = selected;
    console.log(box4.childNodes[0].firstChild.nodeValue);
    //console.log(four);
    box4.style.pointerEvents = "none";
});
box5.addEventListener("click",function(){
    box5.childNodes[0].firstChild.nodeValue = selected;
    five = selected;
    console.log(box5.childNodes[0].firstChild.nodeValue);
    //console.log(five);
    box5.style.pointerEvents = "none";
});
box6.addEventListener("click",function(){
    box6.childNodes[0].firstChild.nodeValue = selected;
    six = selected;
    console.log(box6.childNodes[0].firstChild.nodeValue);
    //console.log(six);
    box6.style.pointerEvents = "none";
});
box7.addEventListener("click",function(){
    box7.childNodes[0].firstChild.nodeValue = selected;
    seven = selected;
    console.log(box7.childNodes[0].firstChild.nodeValue);
    //console.log(seven);
    box7.style.pointerEvents = "none";
});
box8.addEventListener("click",function(){
    box8.childNodes[0].firstChild.nodeValue = selected;
    eight = selected;
    console.log(box8.childNodes[0].firstChild.nodeValue);
    //console.log(eight);
    box8.style.pointerEvents = "none";
});
box9.addEventListener("click",function(){
    box9.childNodes[0].firstChild.nodeValue = selected;
    nine = selected;
    console.log(box9.childNodes[0].firstChild.nodeValue);
    //console.log(nine);
    box9.style.pointerEvents = "none";
});

function generateRandomNumber(){
    randomItem = Math.floor(Math.random() * 9) + 1;
    //console.log(randomItem);
}

//Window load event resets all defaults
window.addEventListener("load",(event) => {
    play.disabled = false;
});
