class LSystem {
	constructor(axiom, rules) {
		this.axiom = axiom;
		this.rules = rules;
	}

	next(from) {
		let newString = '';

		for (const c of from) {
			let newChar = '';

			const found = this.rules.some(rule => {
				if (rule.predecessor === c) {
					newChar = rule.successor;
					return true;
				}

				return false;
			});

			if (!found) {
				newChar = c;
			}

			newString += newChar;
		}

		return newString;
	}

	iterate(n) {
		let curr = this.axiom; // Axiom is considered 0th iteration

		for (let i = 0; i < n; i++) {
			curr = this.next(curr);
		}

		return curr;
	}
}
