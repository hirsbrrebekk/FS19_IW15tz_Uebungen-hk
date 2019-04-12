
function klickZaehler() {
  if (typeof(Storage) !== "undefined"){
  	if (localStorage.clickcount){
  		localStorage.clickcount = Number (localStorage.clickcount)+1;
  	} else {
  	localStorage.clickcount=1;
  }
  document.getElementById("result").innerHTML = localStorage.clickcount;
 } else {
	document.getElementById("result").innerHTML = "Sorry, leider unterstützt dein Brower diese Funktion nicht.";
}
}

function clearZaehler(){
	localStorage.clickcount=0;
	document.getElementById("result").innerHTML = localStorage.clickcount;
}