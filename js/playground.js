function testVariables() {
	let output = '';
	let a = 10;
	const b = 'Hello';
	var c = true;
	output += `let a = ${a}<br>`;
	output += `const b = ${b}<br>`;
	output += `var c = ${c}<br>`;
	showOutput(output);
}

function testFunctions() {
	let output = '';
	function add(x, y) { return x + y; }
	const multiply = (x, y) => x * y;
	output += `add(2, 3) = ${add(2, 3)}<br>`;
	output += `multiply(4, 5) = ${multiply(4, 5)}<br>`;
	showOutput(output);
}

function testArrays() {
	let arr = [1, 2, 3, 4, 5];
	let output = '';
	output += `Array: [${arr.join(', ')}]<br>`;
	output += `First element: ${arr[0]}<br>`;
	output += `Length: ${arr.length}<br>`;
	output += `Mapped (x2): [${arr.map(x => x * 2).join(', ')}]<br>`;
	showOutput(output);
}

function testObjects() {
	let person = { name: 'Alice', age: 30 };
	let output = '';
	output += `Name: ${person.name}<br>`;
	output += `Age: ${person.age}<br>`;
	person.job = 'Engineer';
	output += `Job: ${person.job}<br>`;
	showOutput(output);
}

function clearOutput() {
//    document.querySelector('#output').innerHTML = '';
	document.getElementById('output').innerHTML = '';
}

function showOutput(html) {
	document.getElementById('output').innerHTML = html;
    //document.getElementById('titulo').textContent = 'Nuevo Título';
    //document.getElementById('titulo').style.color = 'blue';
}

document.getElementById('alert').addEventListener('click', function() {
    alert('Button clicked!');
    console.log('Alert button was clicked.');
});

document.getElementById('alert2').addEventListener('click', function() {
    alert('Div clicked!');
    console.log('Alert2 div was clicked.');
});