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
      var wzmoc = Math.pow(g_mn_stats, this.poziom-1);
      this.sila = Math.round(sila*wzmoc);
      this.obrona = Math.round(obrona*wzmoc);
      this.hp = Math.round(hp*wzmoc);
      this.hp_max = Math.round(hp*wzmoc);
    }

    this.poziom = _poziom;
    this.rasa = rasa;
    var wzmoc = Math.pow(g_mn_stats, this.poziom-1)
    this.sila = Math.round(sila*wzmoc);
    this.obrona = Math.round(obrona*wzmoc);
    this.hp = Math.round(hp*wzmoc);
    this.hp_max = Math.round(hp*wzmoc);
    //wypisz co w sobie masz
    this.print = function() {
        console.log('rasa: '+this.rasa+', poziom: '+this.poziom+', siła: '+this.sila+', obrona: '+this.obrona+', hp: '+this.hp+'/'+this.hp_max);
    },

    this.print_text = ['rasa: '+this.rasa+', poziom: '+this.poziom+', siła: '+this.sila+', obrona: '+this.obrona+', hp: '+this.hp+'/'+this.hp_max]
  }

////////////////////
// DEFINICJA POTWORA
////////////////////

function potwor(typ, _poziom) {

if (!_poziom>=1) {
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
  var wzmoc = Math.pow(g_mn_stats, _poziom-1);

  this.rasa = rasa;
  this.sila = Math.round(sila*wzmoc);
  this.obrona = Math.round(obrona*wzmoc);
  this.hp = Math.round(hp*wzmoc);
  this.hp_max = Math.round(hp*wzmoc);
  this.gold = Math.round(gold*wzmoc);
  this.exp = Math.round(exp*wzmoc);
  this.zywy = true;
  //wypisz co w sobie ma
  this.print = function() {
      console.log('rasa: '+this.rasa+', siła: '+this.sila+', obrona: '+this.obrona+', hp: '+this.hp+'/'+this.hp_max);
  }
} //koniec else poziom
}


//END
