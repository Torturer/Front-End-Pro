const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};


const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

/////////

class User {
	constructor(obj) {
		for (let item in obj) {
			this[item] = obj[item];
		}
	}

	getScoreLevel(number) {
		let level = ``
		let tempKey = 0
		for (let key in gradation) {
			if (number > tempKey) {
				tempKey = Number(key);
				level = gradation[key];
				continue;
			}
			break;
		}
		return level
	}

	render() {
		let finalRender = [`<div class="user">`];
		finalRender.push(this.rederUserInfo());
		this.courses && finalRender.push(this.renderCourse());
		finalRender.push(`</div>`)
		return finalRender.join(``)
	};

	renderCourse() {
		debugger;
		let finalRender = [`<div class="user__courses">`]
		finalRender.push(this.courses
			.map(obj => {
				return `<p class="user__courses--course ${this.role}">${obj.title} <span class="${this.getScoreLevel(obj.mark)}">${this.getScoreLevel(obj.mark)}</span></p>`
			})
			.join(``))
		finalRender.push(`</div>`);
		return finalRender.join(``);
	};

	rederUserInfo() {
		return `<div class="user__info">
		<div class="user__info--data">
			<img src="images/users/${this.img}.png" alt="${this.name}" height="50">
			<div class="user__naming">
			  <p>Name: <b>${this.name}</b></p>
			  <p>Age: <b>${this.age}</b></p>
			</div>
		</div>
		<div class="user__info--role student">
			<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
			<p>${this.role}</p>
		</div>
        </div>`
	};
}

class Student extends User {
	constructor(obj) {
		super(obj);
	}
}

class Lector extends User {
	constructor(obj) {
		super(obj);
	}

	renderCourse() {
		let finalRender = [`<div class="user__courses admin--info">`]
		finalRender.push(this.courses
			.map(obj => `                
			<div class="user__courses--course lector">
			<p>Title: <b>${obj.title}</b></p>
			<p>Lector's score: <span class="${this.getScoreLevel(obj.score)}">${this.getScoreLevel(obj.score)}</span></p>
			<p>Average student's score: <span class="${this.getScoreLevel(obj.studentsScore)}">${this.getScoreLevel(obj.studentsScore)}</span></p>
		    </div>`)
			.join(``));
		finalRender.push(`</div>`);
		return finalRender.join(``);
	};
}

class Admin extends User {
	constructor(obj) {
		super(obj);
	}

	renderCourse() {
		let finalRender = [`<div class="user__courses admin--info">`]
		finalRender.push(this.courses
			.map(obj => `                
			<div class="user__courses--course admin">
			<p>Title: <b>${obj.title}</b></p>
			<p>Admin's score: <span class="${this.getScoreLevel(obj.score)}">${this.getScoreLevel(obj.score)}</span></p>
			<p>Lector: <b>${obj.lector}</b></p>
		    </div>`)
			.join(``));
		finalRender.push(`</div>`);
		return finalRender.join(``);
	};
}

const classContainer = {
	student: obj => new Student(obj),
	admin: obj => new Admin(obj),
	lector: obj => new Lector(obj)
}

/////////
let allUserRenderList = [];

users
	.map(item => classContainer[item.role](item))
	.forEach(obj => allUserRenderList.push(obj.render()))

document.write(`  <div class="users">  ${allUserRenderList.join(``)}  </div>  `)
