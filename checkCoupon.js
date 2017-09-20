function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	var date1 = new Date(currentDate);
	var date2 = new Date(expirationDate);
	return enteredCode === correctCode && date1 <= date2
}