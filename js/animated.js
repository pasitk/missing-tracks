setTimeout(function(){ 
    var introPage = document.getElementById('intro-page');
    introPage.remove();
}, 3000);

//https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

const bgOne = document.querySelector('#bg-one');
const widthOne = 150;
var ranNumsOne = shuffle([1,2,3,4,5,6,7,8,9,10]);
var j = 0;
var numOfPeopleOne = Math.floor(window.screen.width / widthOne);
for (var i = 0; i<numOfPeopleOne; i++) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "img/person-"+ranNumsOne[j]+".svg");
    elem.setAttribute("width", widthOne);
    elem.setAttribute("class", "person");
    bgOne.appendChild(elem);
    if (j+1 == ranNumsOne.length) {
        j = 0;
    } else {
        j++;
    }
}

const bgTwo = document.querySelector('#bg-two');
const widthTwo = 75;
var numOfPeopleTwo = Math.floor(window.screen.width / widthTwo);
for (var i = 0; i<numOfPeopleTwo; i++) {
    var elem = document.createElement("img");
    var num = Math.ceil(Math.random()*10);
    elem.setAttribute("src", "img/person-"+num+".svg");
    elem.setAttribute("width", widthTwo);
    elem.setAttribute("class", "person");
    bgTwo.appendChild(elem);
}

const bgThree = document.querySelector('#bg-three');
const widthThree = 50;
var numOfPeopleThree = Math.floor(window.screen.width / widthThree);
for (var i = 0; i<numOfPeopleThree; i++) {
    var elem = document.createElement("img");
    var num = Math.ceil(Math.random()*10);
    elem.setAttribute("src", "img/person-"+num+".svg");
    elem.setAttribute("width", widthThree);
    elem.setAttribute("class", "person");
    bgThree.appendChild(elem);
}

const bgFour = document.querySelector('#bg-four');
const widthFour = 30;
var numOfPeopleFour = Math.floor(window.screen.width / widthFour);
for (var i = 0; i<numOfPeopleFour; i++) {
    var elem = document.createElement("img");
    var num = Math.ceil(Math.random()*10);
    elem.setAttribute("src", "img/person-"+num+".svg");
    elem.setAttribute("width", widthFour);
    elem.setAttribute("class", "person");
    bgFour.appendChild(elem);
}

const persons = document.querySelectorAll('.person');
[].forEach.call(persons, function(person) {
    // do whatever
    var time = Math.random() * 15;
    // console.log("a");
    // console.log(time);
    person.style.setProperty('--animation-time',time +'s');
});