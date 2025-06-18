/* Widget code for the quizzes for the Rio and London scales */

function GetRadioButtonValue(btnname) {
	var rblist = document.getElementsByName(btnname);
	
	let value = null; // Blank value to be used if none are pressed
	
	for (let rb of rblist) {
		if (rb.checked)
			value = rb.value;
	}
	
	return value;
}

function GetRadioButtonNumber(btnname) {
	return parseInt(GetRadioButtonValue(btnname))
}

function MakeNumPrefix(value) {
	if (value >= 100)
		return "";
	else if (value >= 10)
		return "&nbsp; ";
	else if (value >= 0)
		return "&nbsp;&nbsp; ";
	else if (value > -10)
		return "&nbsp; ";
	else
		return "";
}

function WriteVal(location, value) {
	 document.getElementById(location).innerHTML =
	 	MakeNumPrefix(value) + value.toString();
}

function WriteFixVal(location, value, ndigits) {
	 document.getElementById(location).innerHTML =
	 	MakeNumPrefix(value) + value.toFixed(ndigits);
}

function WritePrecVal(location, value, ndigits) {
	 document.getElementById(location).innerHTML =
	 	MakeNumPrefix(value) + value.toPrecision(ndigits);
}

function WriteFPVal(location, value, ndigits) {
	 document.getElementById(location).innerHTML =
	 	MakeNumPrefix(value) +
	 		(Math.abs(value) >= 1 ?
	 			value.toFixed(ndigits) :
	 				value.toPrecision(ndigits));
}
