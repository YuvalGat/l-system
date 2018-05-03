function setup() {
	createCanvas(1000, 1000);
	background(0);
	stroke(255);
	strokeWeight(2);
	frameRate(60);
	colorMode(HSB, 360, 1, 1);
}

function draw() {
	background(0);
	translate(width / 2, height);

	const axiom = '0';
	const rules = [
		new Rule('1', '11'),
		new Rule('0', '1[0]0')
	];

	const length = 0.9 * pow(2, 3);

	const sys = new LSystem(axiom, rules);
	const pattern = sys.iterate(7);

	for (let i = 0; i < pattern.length; i++) {
		const char = pattern[i];

		switch (char) {
			case '0':
				stroke((i / pattern.length * 50 + 300) % 360, 1, 1);
				line(0, 0, 0, -length);
				translate(0, -length);
				break;
			case '1':
				stroke(255);
				line(0, 0, 0, -length);
				translate(0, -length);
				break;
			case '[':
				push();
				rotate((sin(frameCount / 25) + 1) * PI / 8);
				break;
			case ']':
				pop();
				rotate(-(sin(frameCount / 33) + 1) * PI / 8);
				break;
			default:
				break;
		}

		if (random() < 0.005) {
			point(random(width) - width / 2, random(height));
		}
	}
}
