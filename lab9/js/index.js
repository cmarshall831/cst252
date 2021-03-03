/**
* Author: Connor Marshall
* Created: 03.02.2021
* Credit: Wes Modes
* Source: CST252
**/

getElementById('output');

var newElement1 = document.createElement("p");

newElement1.innerHTML = "This is the new Element 1.";
newElement1.id = "New-Element-1";

var newElement2 = document.createElement("p");
newElement2.id = "New-Element-2";

newElement2.innerHTML = "This is the new Element 2.";

outputElement.appendChild(newElement1);
outputElement.appendChild(newElement2);

newElement1.style.color = "lightblue"
newElement1.style.fontSize = "35px"
newElement2.style.color = "lightpurple"
newElement2.style.fontSize = "35px"

}
