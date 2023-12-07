// Exercise 7

function exercise7() {
	const r = prompt("Input radius");
	// const area = r*r*3.14;
	const area = Math.pow(r, 2)*Math.PI;
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

// Exercise 1

function exercise1() {
	let sum = 0;
	let counter = 0;
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

	while (counter <= n) {

		if (counter % 2 == 0) {
			evenSum = evenSum + counter;
			counter = counter + 1;
		} else {
			oddSum = oddSum + counter;
			counter = counter + 1;
		}
	}

	console.log(oddSum);
	console.log(evenSum);
}

// Exercise 4

function exercise4() {
	const div = document.getElementById("stars");
	const n = prompt("Enter limit");
	let counter = 1;
	
	while (counter <= n) {
		let i = 1;
		let paragraph = document.createElement('p');

		while (i <= counter) {
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
// exercise4();
// exercise7();
// exercise10();
