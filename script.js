//To jest skrypt

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var gra = (function() {
  var _hiddenVar = 'tekst';
  var _visibleVar = 'tekst2';
  var _var = 'ukryty jestem';

  var tutaj2 = document.getElementById("tutaj2");

  var _start = async function() {
      tutaj2.innerHTML += "> Witaj w mojej grze!<br />";
      await sleep(500);
      tutaj2.innerHTML += "> Za chwilę poproszę Cię o podanie twojego imienia<br />";
      await sleep(2500);
      //console.log("teraz");
      var imie = prompt("Podaj swoje imię:");
      tutaj2.innerHTML += "> Witaj "+imie+"<br />";
  }

  var _hiddenMethod = function() {
      console.log(_var + _var2);
  }

  var _print = function() {
      console.log(_var);
  }

  //wszystko co zwracamy staje się dostępne na zewnątrz, cała reszta będzie ukryta dla zewnętrznego środowiska
  return {
      print : _print, // To jest funkcja
      ourVar : _visibleVar, //to jestzmienna, wartość
      start : _start
  }
})();


function start_app(){
	//gra.start();
}

// Wystaruj
window.onload = start_app();
