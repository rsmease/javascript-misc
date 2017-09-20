function rakeGarden(garden) {
  var rakedGarden =[];
  garden.split(" ").forEach(function(ele) {
  	if (ele === "rock") {
  		rakedGarden.push("rock")
  	} else {
  		rakedGarden.push("gravel")
  	}
  })
  return rakedGarden.join(" ");
}