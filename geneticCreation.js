const generate = length => {
	my_dna = [];
	while (my_dna.length < length) {
		my_chromosome = Math.random();
		if (my_chromosome > 0.5) {
			my_dna.push(1);
		} else {
			my_dna.push(0);
		}
	}
	return my_dna.join("");
};
console.log(generate(16))