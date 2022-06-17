var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var item = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}


function createListElement() {
	// div created
	var div = document.createElement("div");
	div.classList.add("wrapper");
	ul.appendChild(div);
	// line created
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	// li attached to parent div
	div.appendChild(li);
	// button created
	var del = document.createElement("button");
	del.classList.add("dbut");
	del.appendChild(document.createTextNode("Delete"));
	// del attaches to parent li
	li.appendChild(del);
}


// this works.
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}


// this works.
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


// NOT WORKING - Delete function
function deleteAfterClick(element) {
		if (element.target.className === "dbut") {
			element.target.parentElement.remove();
	}
}

//NOT WORKING. strike thru on click
function strike(element) {
var i = 0;
if (i < 1 && element.target.tagName === "li") { 
	element.target.classList.add("done");
	} 
	else {
	element.target.classList.toggle("done"); 
	} 
i++; 
}



// the program running:


// This adds a list item if there's stuff typed and you click 'enter' good to go
button.addEventListener("click", addListAfterClick);

// this adds a list item if there's something typed and you press 'enter' on keyboard. good to go
input.addEventListener("keypress", addListAfterKeypress);

// this is supposed to add function to the delete WORKING YAAAAAAAAY
ul.addEventListener("click", deleteAfterClick);


ul.addEventListener("click", strike);

