//Get the id's of the boxes
box1=document.getElementById("box1");
box2=document.getElementById("box1");
box3=document.getElementById("box1");
box4=document.getElementById("box1");
box5=document.getElementById("box1");
box6=document.getElementById("box1");
box7=document.getElementById("box1");
box8=document.getElementById("box1");
box9=document.getElementById("box1");
iWant = document.getElementById("iWant");
play = document.getElementById("play");

play.addEventListener("click",XorO);

function XorO(){

//Get the id and value of the question
selectX = document.getElementById("selectX");
selectO = document.getElementById("selectO");

//Check to see if X or O is selected

if (selectO.checked){
    console.log(selectO.value);
    iWant.firstChild.nodeValue = selectO.value;
}else{
    iWant.firstChild.nodeValue = selectX.value;
    console.log(selectX.value);
}
}


box1.addEventListener("click",box);

function box(){
    console.log("Box 1 clicked");
}