//Functions
function musicVolume(){
	document.getElementById("bg-music").volume = 0.05;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var kremowki = 0;
var kremowkiPS = 0;
var kremowkiPC = 1;
var maledzieci = 0;
var cyganie = 0;
var studenci = 0;
var imigranci = 0;
var papaje = 0;

//Kremowka on click
function krmClicked(){
		clickAnim();
		kremowki += kremowkiPC;
		document.getElementById("ilosc").innerHTML = 'Kremówki: '+ kremowki;
}

//Male dzieci +1
function maledziecipc(){
	var koszt = (4 + kremowkiPC * 2) * 2;

	if(kremowki >= koszt){
	maledzieci += 1;
	kremowki -= koszt;
	document.getElementById("maledzieciPC").innerHTML ='Małe Dzieci: ' + maledzieci;
	kremowkiPC = 1 + maledzieci;
	document.getElementById("ilosc").innerHTML = 'Kremówki: '+ kremowki;
	}else{alert('Potrzebujesz: '+ koszt + ' kremówek');}
}

//Cyganie +1
function cyganieps(){
	var koszt = (1000 + cyganie) * 2;

	if(kremowki >= koszt){
	cyganie += 1;
	kremowki -= koszt;
	document.getElementById("cyganieps").innerHTML ='Cyganie: ' + cyganie;
	document.getElementById("ilosc").innerHTML = 'Kremówki: '+ kremowki;
	}else{alert('Potrzebujesz: '+ koszt + ' kremówek');}
}

//Studenci +1
function studencips(){
	var koszt = (10000 + studenci) * 2;

	if(kremowki >= koszt){
	studenci += 1;
	kremowki -= koszt;
	document.getElementById("studencips").innerHTML ='Studenci: ' + studenci;
	document.getElementById("ilosc").innerHTML = 'Kremówki: '+ kremowki;
	}else{alert('Potrzebujesz: '+ koszt + ' kremówek');}
}

//Imigranci +1
function imigrancips(){
	var koszt = (1000000 + imigranci) * 2;

	if(kremowki >= koszt){
	imigranci += 1;
	kremowki -= koszt;
	document.getElementById("imigrancips").innerHTML ='Imigranci: ' + imigranci;
	document.getElementById("ilosc").innerHTML = 'Kremówki: '+ kremowki;
	}else{alert('Potrzebujesz: '+ koszt + ' kremówek');}
}

//Papaje +1
function papajeps(){
	var koszt = (100000000 + papaje) * 2;

	if(kremowki >= koszt){
	papaje += 1;
	kremowki -= koszt;
	document.getElementById("papajeps").innerHTML ='Papaje: ' + papaje;
	document.getElementById("ilosc").innerHTML = 'Kremówki: '+ kremowki;
	}else{alert('Potrzebujesz: '+ koszt + ' kremówek');}
}


//Click animation
async function clickAnim(){
	document.getElementById("click").classList.add("clicked-anim");
	await sleep(10);
	document.getElementById("click").classList.remove("clicked-anim");

}

//Kremowki per sec
function persec(){
	kremowki += kremowkiPS;
}

//Draw per sec
function drawpersec(){
	document.getElementById("displayps").innerHTML = 'Kremówek na sek: ' + kremowkiPS;
	document.getElementById("ilosc").innerHTML = 'Kremówki: '+ kremowki;
}
setInterval(persec,1000);
setInterval(drawpersec,100);

//Count kremowki
function countall(){
	kremowkiPS = (cyganie * 5) + (studenci * 100) + (imigranci * 1000) + (papaje * 10000);
}
setInterval(countall,100);

//Executed onLoad
function defaultSettings(){
	musicVolume();
}

window.onload = defaultSettings;
