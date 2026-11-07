var allbuttons = [0,1,2,3,4,5,6];
var audio1 = new Audio('sounds/tom-1.mp3');
var audio2 = new Audio('sounds/tom-2.mp3');
var audio3 = new Audio('sounds/tom-3.mp3');
var audio4 = new Audio('sounds/tom-4.mp3');
var audio5 = new Audio('sounds/snare.mp3');
var audio6 = new Audio('sounds/crash.mp3');
var audio7 = new Audio('sounds/kick-bass.mp3');

//.1
/*document.querySelectorAll("button")[0].addEventListener("click", alertButton);
document.querySelectorAll("button")[1].addEventListener("click", alertButton);
document.querySelectorAll("button")[2].addEventListener("click", alertButton);
document.querySelectorAll("button")[3].addEventListener("click", alertButton);
document.querySelectorAll("button")[4].addEventListener("click", alertButton);
document.querySelectorAll("button")[5].addEventListener("click", alertButton);
document.querySelectorAll("button")[6].addEventListener("click", alertButton);*/


//.2
var number = document.querySelectorAll(".drum").length;
let time;

for (var i = 0; i<number; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(key){

    makesound(event.key);
    buttonAnimation(event.key);
})

function makesound (key){
    switch (key) {
        case "w":
            audio1.play();
            break;
        case "a":
            audio2.play();
            break;
        case "s":
            audio3.play();
            break;
        case "d":
            audio4.play();
            break;
        case "j":
            audio5.play();
            break;
        case "k":
            audio6.play();
            break;
        case "l":
            audio7.play();
            break;
        default: console.log(key);
    }
}

function buttonAnimation (key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function (){
        document.querySelector("." + key).classList.remove("pressed");

    }, 1000)
}






//.3
/*document.querySelectorAll(".drum")[0].addEventListener("click", function(){
    audio1.play();
});
document.querySelectorAll(".drum")[1].addEventListener("click", function(){
    audio2.play();
});
document.querySelectorAll(".drum")[2].addEventListener("click", function(){
    audio3.play();
});
document.querySelectorAll(".drum")[3].addEventListener("click", function(){
    audio4.play();
});
document.querySelectorAll(".drum")[4].addEventListener("click", function(){
    audio5.play();
});
document.querySelectorAll(".drum")[5].addEventListener("click", function(){
    audio6.play();
});
document.querySelectorAll(".drum")[6].addEventListener("click", function(){
    audio7.play();
});*/




/*function alertButton() {
    alert("Hello Marwane!");
}*/

/*function add (num1,num2){
    return num1 + num2;
}

function multiply (num1,num2){
    return num1 * num2;
}

function subtract (num1,num2){
    return num1 - num2;
}

function calculator (num1,num2,operator){
    return operator(num1, num2);
}*/

/*var worker = {
    name: "marwane",
    job: "dev",
    age: 18,
    place: "chlef"
}*/

/*function worker (name, age, job ,place){
    this.name = name;
    this.age = age;
    this.job = job;
    this.place = place;
    this.clean = function (){
        alert("cleaning the house sir ...")
    }
}

var worker1 = new worker("marwane", 18, "developer","chlef");

console.log(worker1.name ,worker1.clean);*/

/*function marwaneevent (type1, call1){

    var marwanesb = {
        event : "sbaihia",
        age: 18,
        place: "chlef",
    }

    if (marwanesb.event === type){
        call(marwanesb)
    } else {
        console.log("u are 7mar");
    }

}

function domMarwane (type2, call){

    var marwanesss= {
        name : "drum",

    }
}

marwaneevent("sbaihia", function (event) {
    console.log(event);
})*/