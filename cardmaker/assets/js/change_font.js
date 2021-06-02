function font(value){
	var dmside = document.getElementById("bigboicon");
	if (value == 1){
		document.getElementById("pname").style.fontFamily="Arial";
		document.getElementById("paddr").style.fontFamily="Arial";
		document.getElementById("pdate").style.fontFamily="Arial";
		document.getElementById("pgreet").style.fontFamily="Arial";

	}
	else if (value == 2){
		document.getElementById("pname").style.fontFamily="Times New Roman";
		document.getElementById("paddr").style.fontFamily="Times New Roman";
		document.getElementById("pdate").style.fontFamily="Times New Roman";
		document.getElementById("pgreet").style.fontFamily="Times New Roman";
	}
	else if (value == 3){
		document.getElementById("pname").style.fontFamily="STLiti";
		document.getElementById("paddr").style.fontFamily="STLiti";
		document.getElementById("pdate").style.fontFamily="STLiti";
		document.getElementById("pgreet").style.fontFamily="STLiti";
	}
	else if (value == 4){
		document.getElementById("pname").style.fontFamily="Monotype Corsiva";
		document.getElementById("paddr").style.fontFamily="Monotype Corsiva";
		document.getElementById("pdate").style.fontFamily="Monotype Corsiva";
		document.getElementById("pgreet").style.fontFamily="Monotype Corsiva";
	}
	else if (value == 5){
		document.getElementById("pname").style.fontFamily="Lucida Calligraphy";
		document.getElementById("paddr").style.fontFamily="Lucida Calligraphy";
		document.getElementById("pdate").style.fontFamily="Lucida Calligraphy";
		document.getElementById("pgreet").style.fontFamily="Lucida Calligraphy";
	}
	else if (value == 6){
		document.getElementById("pname").style.fontFamily="CASTELLAR";
		document.getElementById("paddr").style.fontFamily="CASTELLAR";
		document.getElementById("pdate").style.fontFamily="CASTELLAR";
		document.getElementById("pgreet").style.fontFamily="CASTELLAR";
	}

}

// Changing Font Sizes

function fontsize(value){
	var dmside = document.getElementById("bigboicon");
	if (value == 1){
		document.getElementById("pname").style.fontSize="14px";
		document.getElementById("paddr").style.fontSize="14px";
		document.getElementById("pdate").style.fontSize="14px";
		document.getElementById("pgreet").style.fontSize="14px";

	}
	else if (value == 2){
		document.getElementById("pname").style.fontSize="16px";
		document.getElementById("paddr").style.fontSize="16px";
		document.getElementById("pdate").style.fontSize="16px";
		document.getElementById("pgreet").style.fontSize="16px";
	}
	else if (value == 3){
		document.getElementById("pname").style.fontSize="18px";
		document.getElementById("paddr").style.fontSize="18px";
		document.getElementById("pdate").style.fontSize="18px";
		document.getElementById("pgreet").style.fontSize="18px";
	}
	else if (value == 4){
		document.getElementById("pname").style.fontSize="20px";
		document.getElementById("paddr").style.fontSize="20px";
		document.getElementById("pdate").style.fontSize="20px";
		document.getElementById("pgreet").style.fontSize="20px";
	}

}

