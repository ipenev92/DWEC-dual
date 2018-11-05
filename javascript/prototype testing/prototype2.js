class Rabbit {
	constructor(type) {
  		this.type = type;
 	}
	speak(item) {
		console.log(`The ${this.type} rabbit says '${item}'`);
	}

	eat(item) {
		console.log(`The ${this.type} rabbit is eating ${item}`);
	}
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

killerRabbit.eat("bamboo");
blackRabbit.speak("I KILL YoU");

Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);
