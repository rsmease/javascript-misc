function GetSum( a,b )	{
	var max = Math.max(a, b)
	var min = Math.min(a, b)

	var sum = 0;
	for (var i = min; i <= max; i++) {
		sum += i;
	}
	return sum;
}