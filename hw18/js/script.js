const PRODUCTS = [
	{
		id: 1,
		title: "Aircraft Carrier",
		img: "aircraft-carrier",
		price: 30000,
		sale: true,
		salePercent: 2,
		categories: ['Boat']
	},
	{
		id: 2,
		title: "Boat",
		img: "boat",
		price: 700,
		sale: false,
		categories: ['Boat']
	},
	{
		id: 3,
		title: "Bus",
		img: "bus",
		price: 300,
		sale: true,
		salePercent: 10,
		categories: ['Bus']
	},
	{
		id: 4,
		title: "Cabriolet",
		img: "cabriolet",
		price: 900,
		sale: true,
		salePercent: 25,
		categories: ['Car']
	},
	{
		id: 5,
		title: "Commercial Plane",
		img: "commercial-plane",
		price: 1000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 6,
		title: "Electric car",
		img: "electric-car",
		price: 3000,
		sale: false,
		categories: ['Car']
	},
	{
		id: 7,
		title: "Helicopter police",
		img: "helicopter-police",
		price: 1000,
		sale: true,
		salePercent: 15,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 8,
		title: "Helicopter",
		img: "helicopter",
		price: 900,
		sale: true,
		salePercent: 35,
		categories: ['Aircraft', 'Helicopter']
	},
	{
		id: 9,
		title: "Minibus",
		img: "minibus",
		price: 700,
		sale: true,
		salePercent: 5,
		categories: ['Car', 'Bus']
	},
	{
		id: 10,
		title: "Motorbike",
		img: "motorbike",
		price: 200,
		sale: true,
		salePercent: 25,
		categories: ['Bike']
	},
	{
		id: 11,
		title: "Off Road",
		img: "off-road",
		price: 600,
		sale: false,
		categories: ['Car']
	},
	{
		id: 12,
		title: "Police Car",
		img: "police-car",
		price: 100,
		sale: false,
		categories: ['Car']
	},
	{
		id: 13,
		title: "School Bus",
		img: "school-bus",
		price: 150,
		sale: true,
		salePercent: 8,
		categories: ['Bus']
	},
	{
		id: 14,
		title: "Scooter",
		img: "scooter",
		price: 80,
		sale: true,
		salePercent: 13,
		categories: ['Bike']
	},
	{
		id: 15,
		title: "Small Plane",
		img: "small-plane",
		price: 3000,
		sale: false,
		categories: ['Aircraft']
	},
	{
		id: 16,
		title: "Speed Boat",
		img: "speed-boat",
		price: 2000,
		sale: true,
		salePercent: 34,
		categories: ['Boat']
	},
	{
		id: 17,
		title: "Sport Car",
		img: "sport-car",
		price: 10000,
		sale: true,
		salePercent: 3,
		categories: ['Car']
	},
	{
		id: 18,
		title: "Suv",
		img: "Suv",
		price: 300,
		sale: true,
		salePercent: 13,
		categories: ['Car', 'Bus']
	}
];

const USERS = [
	{
		name: 'Ivan',
		email: 'ivan@gmail.com',
		password: '123',
		favourites: [9, 18, 7],
		status: false
	}
];

const getStorageUsers = () => {
	!localStorage.getItem(`users`) && localStorage.setItem(`users`, JSON.stringify(USERS));
	return JSON.parse(localStorage.getItem(`users`))
}

const salePrice = (value, percent) => {
	let result = value / 100 * (100 - percent);
	return result.toFixed(0);
}


const storageUsers = getStorageUsers();
const userInSession = storageUsers.find(user => user.status === true);
const categoriesContainer = document.querySelector(`#categoriesContainer`);
const favouriteTable = document.querySelector(`#favouriteTable`);
const RegistrationForm = document.querySelector(`#RegistrationForm`);
const LoginForm = document.querySelector(`#LoginForm`);

const headerUser = document.querySelector(`#headerUser`);
const headerFavourites = document.querySelector(`#headerFavourites`);
const headerLogout = document.querySelector(`#headerLogout`);
const headerFavouritesCount = document.querySelector(`#headerFavouritesCount`);

if (userInSession) {
	headerUser.innerHTML = userInSession.name;
	headerUser.href = `favourites.html`;
	headerFavourites.href = `favourites.html`;
	headerFavouritesCount.innerHTML = userInSession.favourites.length;
	headerLogout.classList.add(`active`);
}

headerLogout.addEventListener(`click`, e => {
	const userInSession = storageUsers.find(user => user.status === true);
	userInSession.status = false;
	localStorage.setItem(`users`, JSON.stringify(storageUsers));
	document.location.href = `index.html`
})

if (categoriesContainer) {
	PRODUCTS.forEach(item => {
		item.categories.forEach(category => {
			if (!document.querySelector(`.category[data-name="${category}"]`)) {
				const section = document.createElement(`section`);
				section.classList.add(`category`);
				section.setAttribute(`data-name`, category);
				categoriesContainer.append(section)

				const sectionTittle = document.createElement(`h2`);
				sectionTittle.innerHTML = category;
				section.append(sectionTittle);

				const sectionTittleCategoryContainer = document.createElement(`div`);
				sectionTittleCategoryContainer.classList.add(`category__container`);
				section.append(sectionTittleCategoryContainer);
			}
			const section = document.querySelector(`.category[data-name="${category}"]`)
			const block = section.querySelector(`.category__container`);

			const product = document.createElement(`div`);
			product.classList.add(`product`);
			product.setAttribute(`data-id`, item.id)
			block.append(product);

			const productFavorite = document.createElement(`button`);
			productFavorite.classList.add(`product__favourite`);
			product.append(productFavorite);

			const productFavoriteImg = document.createElement(`img`);
			productFavoriteImg.alt = `favourite`;
			productFavoriteImg.height = 20;
			productFavoriteImg.setAttribute(`data-id`, item.id)

			if (userInSession && userInSession.favourites.indexOf(item.id) > -1) {
				productFavoriteImg.src = `images/product__favourite--true.png`;
			} else if (userInSession && !userInSession.favourites.indexOf(item.id) > -1 || !userInSession) {
				productFavoriteImg.src = `images/product__favourite.png`;
			}

			productFavorite.addEventListener(`click`, e => {
				const targetID = +e.target.getAttribute(`data-id`)
				if (!userInSession) {
					document.location.href = `login.html`;
				} else if (userInSession.favourites.indexOf(targetID) > -1) {

					let imgs = categoriesContainer.querySelectorAll(`img[data-id="${targetID}"]`);
					imgs.forEach(go => {
						go.src = `images/product__favourite.png`
					})
					userInSession.favourites.splice(userInSession.favourites.indexOf(targetID), 1);
					headerFavouritesCount.innerHTML = userInSession.favourites.length;
					localStorage.setItem(`users`, JSON.stringify(storageUsers))
				} else {
					let imgs = categoriesContainer.querySelectorAll(`img[data-id="${targetID}"]`);
					imgs.forEach(go => {
						go.src = `images/product__favourite--true.png`
					})
					userInSession.favourites.push(targetID);
					headerFavouritesCount.innerHTML = userInSession.favourites.length;
					localStorage.setItem(`users`, JSON.stringify(storageUsers))
				}
			})
			productFavorite.append(productFavoriteImg);

			const productImg = document.createElement(`img`);
			productImg.src = `images/products/${item.img}.png`;
			productImg.classList.add(`product__img`);
			productImg.alt = item.title;
			productImg.height = 80;
			product.append(productImg);

			const productTitle = document.createElement(`p`);
			productTitle.classList.add(`product__title`);
			productTitle.innerHTML = item.title;

			const productInfo = document.createElement(`div`);
			productInfo.classList.add(`product__info`);

			const productPrice = document.createElement(`div`);
			productPrice.classList.add(`product__price`);
			productInfo.append(productPrice);

			if (item.sale) {
				let productSale = document.createElement(`div`)
				productSale.classList.add(`product__sale`);
				product.append(productSale);

				let productSaleOld = document.createElement(`span`);
				productSaleOld.classList.add(`product__sale--old`);
				productSaleOld.innerHTML = `$${item.price}`
				productSale.append(productSaleOld);

				let productSalePercent = document.createElement(`span`);
				productSalePercent.classList.add(`product__sale--percent`);
				productSalePercent.innerHTML = `-${item.salePercent}%`;
				productSale.append(productSalePercent);

				productPrice.innerHTML = `$${salePrice(item.price, item.salePercent)}`
			} else { productPrice.innerHTML = `$${item.price}` }

			product.append(productInfo);
		})
	})
}

if (favouriteTable && userInSession.favourites.length > 0) {
	userInSession.favourites.forEach(id => {
		const tbody = favouriteTable.querySelector(`tbody`);
		const tr = document.createElement(`tr`);
		tbody.append(tr);
		let product = PRODUCTS.find(x => x.id === id)

		tr.innerHTML = `<td>
		                    <div class="item__info">
			                    <img src="images/products/${product.img}.png" alt="${product.title}" height="100">
			                    <div>
				                    <p class="item__info--title">${product.title}</p>
			                    </div>
		                    </div>
	                    </td>
	                    <td>$${product.price}</td>
	                    ${product.sale ? `<td><span class="item__sale">-${product.salePercent}%</span></td>` : `<td></td>`}
	                    <td>${product.sale ? `$${salePrice(product.price, product.salePercent)}` : ``}</td>
	                    <td>
		                    <button class="item__favourite"><img src="images/product__favourite--true.png" alt="favourite" height="20"></button>
	                    </td>`;
		let imgFafourites = tr.querySelector(`.item__favourite img`);
		imgFafourites.setAttribute(`data-id`, product.id);
		tr.setAttribute(`data-id`, product.id)

		imgFafourites.addEventListener(`click`, e => {
			let id = e.target.getAttribute(`data-id`);
			userInSession.favourites.splice(userInSession.favourites.indexOf(id), 1);
			headerFavouritesCount.innerHTML = userInSession.favourites.length;
			localStorage.setItem(`users`, JSON.stringify(storageUsers));
			let fix = document.querySelector(`tr[data-id="${id}"]`);
			fix.remove()
		})

	})
}

class User {
	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.status = true;
		this.favourites = [];
	}
}

if (RegistrationForm) {
	const RegistrationForm = document.querySelector(`#RegistrationForm`);
	RegistrationForm.addEventListener(`submit`, e => {
		e.preventDefault();
		const name = e.target.querySelector(`input[data-name="name"]`).value;
		const email = e.target.querySelector(`input[data-name="email"]`).value;
		const password = e.target.querySelector(`input[data-name="password"]`).value;
		const passwordVerify = e.target.querySelector(`input[data-name="passwordVerify"]`).value;
		const error = RegistrationForm.querySelector(`.error`);

		error.classList.remove(`active`)

		if (password !== passwordVerify) {
			error.classList.add(`active`);
			error.innerHTML = `Password not matches!`;
			return
		}

		let user = storageUsers.find(user => user.email === email);
		if (user) {
			error.classList.add(`active`);
			error.innerHTML = `User with email ${email} already exist!`;
			return
		}

		storageUsers.push(new User(name, email, password));
		localStorage.setItem(`users`, JSON.stringify(storageUsers));
		setTimeout(() => document.location.href = `favourites.html`, 1000)
	})
}

if (LoginForm) {
	const LoginForm = document.querySelector(`#LoginForm`);
	LoginForm.addEventListener(`submit`, e => {
		e.preventDefault();
		const email = e.target.querySelector(`input[data-name="email"]`).value;
		const password = e.target.querySelector(`input[data-name="password"]`).value;
		const error = LoginForm.querySelector(`.error`);

		error.classList.remove(`active`)

		let user = storageUsers.find(user => email === user.email);
		if (!user) {
			error.classList.add(`active`);
			error.innerHTML = `Invalid email`
			return;
		}

		if (password !== user.password) {
			error.classList.add(`active`);
			error.innerHTML = `Invalid paaword`
			return;
		}

		user.status = true;
		localStorage.setItem(`users`, JSON.stringify(storageUsers));
		setTimeout(() => document.location.href = `index.html`, 1000)
	})
}