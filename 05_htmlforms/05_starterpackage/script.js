
//Error message bei falscher Datumseingabe

var input = document.getElementById("validDate");
input.oninvalid = function(event) {
	event.target.setCustomValidity('Das Datum bitte im Format Tag.Monat.Jahr eingeben');
}

//Range Slider mit Umkreis Angabe in Kilometer

var myRange = document.querySelector('#myRange');
var myValue = document.querySelector('#myValue');
var km = 'Km';
var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
var px =  ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

myValue.parentElement.style.left = px + 'px';
myValue.parentElement.style.top = myRange.offsetHeight + 'px';
myValue.innerHTML = myRange.value + ' ' + km;

myRange.oninput =function(){
	let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
    myValue.innerHTML = myRange.value + ' ' + km;
    myValue.parentElement.style.left = px + 'px';
  };