function setup() {
	createCanvas(600, 600);
	background(0);

	// Test
	const axiom = 'A';
	const rules = [
		new Rule('A', 'AB'),
		new Rule('B', 'A')
	];

	const sys = new LSystem(axiom, rules);
	console.log(sys.iterate(0));
}

function draw() {

}
