function lateRide(n) {
	numHours = Math.floor(n / 60);
	numMins = n % 60;

	return (Math.floor(numHours/10) + numHours % 10 + Math.floor(numMins/10) + numMins % 10);
}

