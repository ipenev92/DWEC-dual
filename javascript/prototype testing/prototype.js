function Rabbit(type) {
	this.type = type;
}

Rabbit.prototype.speak = function(item) {
	console.log(`The ${this.type} rabbit says '${item}'`);
};

Rabbit.prototype.eat = function(item) {
	console.log(`The ${this.type} rabbit is eating ${item}`);
}

function changeType(rabbit, type) {
	rabbit.type = type;
}

let weirdRabbit = new Rabbit("weird");
weirdRabbit.speak("Boo");
weirdRabbit.eat("Stuff");
changeType(weirdRabbit, "different");
weirdRabbit.speak("Changed!");
Rabbit.prototype.teeth = "small";
console.log(weirdRabbit.teeth);