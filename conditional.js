//Write a function which takes one argument 
//and returns "negative" if the number is below zero,
// "positive" if the number is above zero, 
//and "zero" if the number is zero.

function sign(n) {
	if (n < 0){
	console.log("negative");
	} else if (n > 0) {
		console.log("postive");
	}	else if (n === 0) {
		console.log("zero");
	}
}
sign(2);
sign(-3);
sign(0);

function bigvsmall (n) {
	if (n > 10) {
		console.log("BIG!");
	} else if (n < 10) {
		console.log("small");
	}
}
bigvsmall(15);
bigvsmall(3);

// Write a function that takes two arguments 
// and returns "same" if the arguments are the same,
 // "different" if the arguments are different.

 	function arguments(a,b) {
 		if (a!b) {
 			console.log("same");
 		} else {
 			console.log("different");
 		}
 	}
 	arguments(6 ,6);
 	arguments(4,5);
