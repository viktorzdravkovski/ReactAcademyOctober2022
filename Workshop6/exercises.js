// Exercise 1

function exercise1() {
	let sum = 0;
	let counter = 1;
	const n = prompt("Enter limit");

	while(counter <= n) {
		sum = sum + counter;
		counter = counter + 1;
	}

	console.log(sum);
}

// Exercise 2

function exercise2() {
	let evenSum = 0;
	let oddSum = 0;
	let counter = 1;
	const n = prompt("Enter limit");

	while(counter <= n) {

		if(counter % 2 == 0) {
			evenSum = evenSum + counter;
		} else {
			oddSum = oddSum + counter;
		}
		counter = counter + 1;
	}

	console.log("Odd sum is: " + oddSum);
	console.log("Even sum is: " + evenSum);
}

// Exercise 7

function exercise7() {
	let r = prompt("Enter radius");
	// let area = r*r*3.14;
	let area = Math.pow(r, 2) * Math.PI;
	console.log(area);
}

// Exercise 10

function exercise10() {
	let a = 3;
	let sum = 0;

	// while (!(a > 159)) {
	// 	sum = sum + a;
	// 	a = a + 2;
	// }

	while (a <= 159) {
		sum = sum + a;
		a = a + 2;
	}

	console.log(sum);
}

// Exercise 4

function exercise4() {
	const div = document.getElementById("stars");
	const n = prompt("Enter limit");
	let counter = 1;
	
	while(counter <= n) {
		let i = 1;
		let paragraph = document.createElement("p");

		while(i <= counter) {
			// console.log("*");
			paragraph.textContent += "*";
			i = i + 1;
		}

		// console.log("\n");
		div.appendChild(paragraph);
		counter = counter + 1;
	}
}


// exercise1();
// exercise2();
// exercise7();
// exercise10();
// exercise4();