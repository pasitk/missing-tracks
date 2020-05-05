setTimeout(function(){ 
    var introPage = document.getElementById('intro-page');
    introPage.remove();

    var creditIndex = document.getElementById('credit-index');
    creditIndex.style.zIndex = 0;
}, 10000);

/*
*   Function to generate random numbers, used for selecting background vectors randomly
*   This code was copied from Stackoverflow comment by Ben Jackson
*   accessed 20-02-2020
*   https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
*/
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
/* End of referenced code : Function to generate random numbers, used for selecting background vectors randomly */

/*
*   The code below is used to generate the background in the splash page
*   References for all vectors used in the splash page
*   1. https://publicdomainvectors.org/en/free-clipart/Woman-silhouette-vector-graphics/14771.html by Openclipart
*   2. https://openclipart.org/detail/21968/person-outline-2-by-rejon by Rejon
*   3. https://openclipart.org/detail/250869/victory-boy-silhouette by GDJ
*   4. https://openclipart.org/detail/250865/ambiguous-female-silhouette by GDJ
*   5. https://openclipart.org/detail/273477/little-girl-and-butterfly-silhouette by GDJ
*   6. https://openclipart.org/detail/270416/pregnancy-silhouette by GDJ
*   7. https://publicdomainvectors.org/en/free-clipart/Lady-silhouette-vector-clip-art/7889.html by Openclipart
*   8. https://openclipart.org/detail/202674/male-silhouette-presenting-or-pointing-by-pnx-202674 by pax
*   9. https://publicdomainvectors.org/en/free-clipart/Man-silhouette-vector-illustration/14773.html by Openclipart
*   10. https://openclipart.org/detail/24896/-by--24896 by radacina
*   accessed all of these vectors : 20-02-2020
*   
*/
const bgOne = document.querySelector('#bg-one');
const widthOne = 150;
var ranNumsOne = shuffle([1,2,3,4,5,6,7,8,9,10]);
var j = 0;
var numOfPeopleOne = Math.floor(window.innerWidth / widthOne);
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
var numOfPeopleTwo = Math.floor(window.innerWidth / widthTwo);
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
var numOfPeopleThree = Math.floor(window.innerWidth / widthThree);
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
var numOfPeopleFour = Math.floor(window.innerWidth / widthFour);
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
    var time = Math.random() * 15;
    person.style.setProperty('--animation-time',time +'s');
});