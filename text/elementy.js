//To jest skrypt

//"Biblioteka" do gry

var element = {

    stats : function() {
          var box = document.createElement('div');
          box.classList.add('stats-panel');
          var img, name, hp;
          img = document.createElement('img');
          name = document.createElement('span');
          name.innerHTML = global_name;

          box.appendChild(img);
          box.appendChild(name);

          return box;
      }
}

////////////////////
// DEFINICJA POSTACI GRACZA
////////////////////

  function postac_gracza(typ, _poziom=1) {

    switch (typ) {
      case 'wojownik':
        var rasa = typ;
        var sila = 20;
        var obrona = 20;
        var hp = 100;
        break;
      case 'zabujca':
        var rasa = typ;
        var sila = 40;
        var obrona = 10;
        var hp = 80;
        break;
      case 'mag':
        var rasa = typ;
        var sila = 20;
        var obrona = 18;
        var hp = 120;
        break;
      default:
      console.log('nieznany typ gracza(wojownik, zabujca, mag)');
      global_error += '|nieznany typ gracza |';

    }

    this.levelup = function() {
      this.poziom++;
      this.sila =sila*(1+(this.poziom-1)/4);
      this.obrona =obrona*(1+(this.poziom-1)/4);
      this.hp =hp*(1+(this.poziom-1)/4);
    }

    this.poziom = _poziom;
    this.rasa = rasa;
    this.sila =sila*(1+(this.poziom-1)/4);
    this.obrona =obrona*(1+(this.poziom-1)/4);
    this.hp =hp*(1+(this.poziom-1)/4);
    //wypisz co w sobie masz
    this.print = function() {
        console.log('rasa: '+this.rasa+', poziom: '+this.poziom+', siła: '+this.sila+', obrona: '+this.obrona+', hp: '+this.hp);
    }
  }

////////////////////
// DEFINICJA POTWORA
////////////////////

function potwor(typ, poziom) {

if (!poziom>=1) {
  console.log('zbyt niski poziom potwora(poziom>=1)');
  global_error += '|zbyt niski poziom potwora |';
} else {

  switch (typ) {
    case 'wilk':
      var rasa = typ;
      var sila = 15;
      var obrona = 10;
      var hp = 100;
      var gold = 10;
      var exp = 10;
      break;
    case 'niedzwiedz':
      var rasa = typ;
      var sila = 25;
      var obrona = 15;
      var hp = 80;
      var gold = 10;
      var exp = 10;
      break;
    case 'dzik':
      var rasa = typ;
      var sila = 10;
      var obrona = 12;
      var hp = 60;
      var gold = 10;
      var exp = 20;
      break;
    default:
    console.log('nieznany typ potwora');
    global_error += '|nieznany typ potwora |';
  }

  //wzmocnienie
  var wzmoc = 1+((poziom-1)/4);
  sila *= wzmoc;
  obrona *= wzmoc;
  hp *= wzmoc;
  gold *= wzmoc;
  exp *= wzmoc;

  this.rasa = rasa;
  this.sila = sila;
  this.obrona = obrona;
  this.hp = hp;
  this.gold = gold;
  this.exp = exp;
  this.zywy = true;
  //wypisz co w sobie ma
  this.print = function() {
      console.log('rasa: '+this.rasa+', siła: '+this.sila+', obrona: '+this.obrona+', hp: '+this.hp);
  }
} //koniec else poziom
}

  var ob = {
    'one': 1,
    'two': 2,
    'three': 3
  };


//END
