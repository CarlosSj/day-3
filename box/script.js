for (var i=0; i < 319; i++) {
	document.querySelector(".container").innerHTML += "<div class='box'></div>";

}

var arrayOfBoxes =document.querySelectorAll(".box");
	console.log(arrayOfBoxes);
 for (var i=0; i < arrayOfBoxes.length; i++) {	
 	if (i % 2 === 0) {
 		arrayOfBoxes[i].style.background = "DimGray";
 	} else if (i % 3 === 0) {
 		arrayOfBoxes[i].style.background = "crimson";
 	} else if (i % 5 === 0) {
 		arrayOfBoxes[i].style.background = "royalblue";
 	} else if (i % 1 ===0) {
 		arrayOfBoxes[i].style.background = "aqua";
 	}
 }