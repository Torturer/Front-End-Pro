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

String.prototype.capitalize = function () {
	return this[0].toUpperCase() + this.slice(1).toLowerCase();
}


class Order {
	constructor(place) {
		this.place = place
		this.ingredients = {}
		this.setOrder()
	}

	setOrder() {
		for (let kategory in HAMBURGER) {
			let kategoryArr = Object.keys(HAMBURGER[kategory])
			let item;

			do {
				item = prompt(`Please choos ingredients for ${kategory}: ${kategoryArr.join(`, `)}.`, kategoryArr[0])
				if (item) {
					item = item.replaceAll(` `, ``).toLowerCase()
				}
			} while (!kategoryArr.includes(item))

			this.ingredients[item] = HAMBURGER[kategory][item]
		}
	}

	get price() {
		let price = 0;
		for(let ingredient in this.ingredients) {
			price += this.ingredients[ingredient].price
		}
		return price
	}

	get calories() {
		let calories = 0;
		for(let ingredient in this.ingredients) {
			calories += this.ingredients[ingredient].calories
		}
		return calories
	}

	renderIngredientsOrder() {
		let arr = [`Ingredients:\n\n`]
		for(let ingredient in this.ingredients) {
			arr.push(`  ${ingredient.capitalize()} \n\n`)
		}
		return arr.join(``)
	}

	get order () {
		return `Order for #${this.place} \n\n ${this.renderIngredientsOrder()} \n\n\n Total price: $${this.price.toFixed(2)} \n\n Total calories: ${this.calories}kka`
	}

}

let hamb = new Order(2)
console.log(hamb.order)
