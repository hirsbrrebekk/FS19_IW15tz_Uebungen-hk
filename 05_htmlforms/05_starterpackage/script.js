
//Error message bei falscher Datumseingabe

var input = document.getElementById("validDate");
input.oninvalid = function(event) {
	event.target.setCustomValidity('Das Datum bitte im Format dd.mm.yyyy eingeben');
}
