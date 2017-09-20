function insurance(age, size, numofdays){
//code here
	if (numofdays <= 0) {
		return 0;
	}
	
	daily_base = 50;

	if (size === "medium") {
		daily_base += 10;
	} else if (size !== "economy") {
		daily_base += 15;
	}

	if (age < 25) {
		daily_base += 10;
	}

	return daily_base * numofdays;
}