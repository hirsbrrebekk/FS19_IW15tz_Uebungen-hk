var input = document.getElementById("date");
input.oninvalid = function(event) {
	event.target.setCustomValidity('Das Datum bitte im Format Tag.Monat.Jahr eingeben');
}