function declareWinner(fighter1, fighter2, firstAttacker) {
	var attackingNow = firstAttacker;
	while (fighter1.health > 0 && fighter2.health > 0) {
		if (fighter1.name === attackingNow) {
			var currentHit = fighter1.damagePerAttack;
			fighter2.health -= currentHit;
			if (fighter2.health <= 0) {
				break;
			}
			console.log(fighter1.name + " attacks " + fighter2.name + ": " + fighter2.name + " now has " + fighter2.health + " health")
			attackingNow = fighter2.name;
		} else {
			var currentHit = fighter2.damagePerAttack;
			fighter1.health -= currentHit;
			if (fighter1.health <= 0) {
				break;
			}
			console.log(fighter2.name + " attacks " + fighter1.name + ": " + fighter1.name + " now has " + fighter1.health + " health")
			attackingNow = fighter1.name;
		}
	}
	if (fighter1.health <= 0) {
		console.log(fighter1.name + " now has " + fighter1.health + " health and is dead. " + fighter2.name + " wins.")
		return fighter2.name;
	} else {
		console.log(fighter2.name + " now has " + fighter2.health + " health and is dead. " + fighter1.name + " wins.")
		return fighter1.name;
	}
}

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))