function showHTML (){
	var	name = document.getElementById("name");
	var address = document.getElementById("address");
	var date = document.getElementById("date");
	var greetings = document.getElementById("greetings");

	var pnamea = document.getElementById('pname');
	var paddra = document.getElementById('paddr');
	var pdatea = document.getElementById('pdate');
	var pgreeta = document.getElementById('pgreet');

	pnamea.innerHTML = name.value;
	paddra.innerHTML = address.value;
	pdatea.innerHTML = date.value;
	pgreeta.innerHTML = greetings.value;
}