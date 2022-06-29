const HAMBURGER = {
	sizeBurg: {
		small: {
			price: 5,
			calories: 20
		},
		big: {
			price: 10,
			calories: 40
		}
	},
	toppings: {
		chees: {
			price: 1,
			calories: 20
		},
		salad: {
			price: 2,
			calories: 5
		},
		potato: {
			price: 1.5,
			calories: 10
		}
	},
	supplements: {
		seasoning: {
			price: 1.5,
			calories: 0
		},
		mayonnaise: {
			price: 2,
			calories: 5
		}
	}
}

class Hamburger {
	constructor() {
		this.setSize(),
			this.setTopings(),
			this.setSupplements()
	}

	setSize() {
		this.sizeBurg = {};
		let { sizeBurg: { small, big } } = HAMBURGER;
		if (confirm(`Хотите большую булочку? Если нет мы сделаем маленькую.`)) {
			this.sizeBurg.big = big
		} else { this.sizeBurg.small = small }
	}

	setTopings() {
		this.toppings = {};
		for (let topping in HAMBURGER.toppings) {
			if (confirm(`Do you want ${topping}`)) { this.toppings[topping] = HAMBURGER.toppings[topping] }
		}
	}

	setSupplements() {
		this.supplements = {};
		let { supplements: { seasoning, mayonnaise } } = HAMBURGER;
		if (confirm(`Хотите попробовать наш фирменный соус? Если нет, тогда добавим майонез`)) {
			this.supplements.seasoning = seasoning
		} else { this.supplements.mayonnaise = mayonnaise }
	}

	getPrice() {
		return this.findNumber(`price`)
	}

	getCalories() {
		return this.findNumber(`calories`)
	}

	findNumber(str) {
		let sum = 0;
		function find(obj) {
			for (let key in obj) {
				let tempObj = obj[key]
				if (typeof tempObj === `object`) {
					find(tempObj);
				} else if (key === str) { sum += tempObj };
			}
		}
		find(this);
		return sum
	}
}

let newBurg = new Hamburger();
console.log(newBurg)
console.log(`Price: ${newBurg.getPrice()}`);
console.log(`Calories: ${newBurg.getCalories()}`);

