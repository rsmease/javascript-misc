// No self respecting traveller would leave Indonesia without buying a vest sporting the logo of their national beer. I mean, you don't want to offend anyone do you?? Good, I thought not.

// The thing is, although they are sold absolutely everywhere, it's hard to know if you are being ripped off on price. (let's not discuss being ripped off on fashion...).

// So you need to practice your haggling skills. As I understand it there are four methods: light haggle, medium haggle, strong haggle and walk away swearing until you get chased down the street and offered one half price.

// So, given the price of the vest (price) and the haggling strategy (haggle), return the relevant price with discount applied as follows:

// light = 20% medium = 30% heavy = 40% walkandswear = 90%

// If the haggle value is anything other than those specified, you will have offended someone, return 'Run!!'

// Prices are all in Rupia
// Test.describe("Example tests",_=>{
// Test.assertSimilar(vestBuy(70000, 'light'), 56000);
// Test.assertSimilar(vestBuy(30000, 'medium'), 21000); 
// Test.assertSimilar(vestBuy(800000, 'walkandswear'), 80000); 
// });

function vestBuy(price, haggle){
	var validHaggles ={"light":20,"medium":30,"heavy":40,"walkandswear":90}
	if (haggle in validHaggles) {
		return price * ((100-validHaggles[haggle])/100)
	} else {
		return "Run!!"
	}
}

console.log(vestBuy(800000, 'walkandswear'))