function setup() {
	createCanvas(1000, 1000);
	noLoop();
	background(0);
	stroke(255);
	strokeWeight(2);
}

function draw() {
	translate(width / 2, height);

	const axiom = '0';
	const rules = [
		new Rule('1', '11'),
		new Rule('0', '1[0]0')
	];

	const length = 2;

	const sys = new LSystem(axiom, rules);
	const pattern = sys.iterate(9);

	for (const char of pattern) {
		switch (char) {
			case '0':
			case '1':
				line(0, 0, 0, -length);
				translate(0, -length);
				break;
			case '[':
				push();
				rotate(PI / 4);
				break;
			case ']':
				pop();
				rotate(-PI / 4);
				break;
			default:
				break;
		}
	}
}
