function nbYear(p0, percent, aug, p) {
    var year = 0
    while (p0 < p) {
    	year++;
    	p0*= 1+(percent/100);
    	p0+= aug;
    }
    return year;
}