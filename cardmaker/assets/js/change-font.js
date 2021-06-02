function font(value){
	var dmside = document.getElementById("dmside");
	if (value == 1){
		document.getElementById("name").style.fontFamily="Trade Winds";
		document.getElementById("address").style.fontFamily="Trade Winds";
		document.getElementById("date").style.fontFamily="Trade Winds";
		document.getElementById("greetings").style.fontFamily="Trade Winds";

	}
	else if (value == 2){
		document.getElementById("name").style.fontFamily="Rambla";
		document.getElementById("address").style.fontFamily="Rambla";
		document.getElementById("date").style.fontFamily="Rambla";
		document.getElementById("greetings").style.fontFamily="Rambla";
	}
	else if (value == 3){
		document.getElementById("name").style.fontFamily="Akaya Kanadaka";
		document.getElementById("address").style.fontFamily="Akaya Kanadaka";
		document.getElementById("date").style.fontFamily="Akaya Kanadaka";
		document.getElementById("greetings").style.fontFamily="Akaya Kanadaka";
	}
	else if (value == 4){
		document.getElementById("name").style.fontFamily="Permanent Packer";
		document.getElementById("address").style.fontFamily="Permanent Packer";
		document.getElementById("date").style.fontFamily="Permanent Packer";
		document.getElementById("greetings").style.fontFamily="Permanent Packer";
	}
	else if (value == 5){
		document.getElementById("name").style.fontFamily="Grand Hotel";
		document.getElementById("address").style.fontFamily="Grand Hotel";
		document.getElementById("date").style.fontFamily="Grand Hotel";
		document.getElementById("greetings").style.fontFamily="Grand Hotel";
	}
	else if (value == 6){
		document.getElementById("name").style.fontFamily="Arizonia";
		document.getElementById("address").style.fontFamily="Arizonia";
		document.getElementById("date").style.fontFamily="Arizonia";
		document.getElementById("greetings").style.fontFamily="Arizonia";
	}

}