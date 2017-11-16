//To jest skrypt

//"Biblioteka" do gry


////////////////////
// PRZEDMIOTY
////////////////////

function give_item(_typ = 0) {
  if (_typ === 0) {
    console.log('Dostępne przedmioty:\n -');
  } else {

    switch (_typ) {
      case 1:
        this.id = _typ;
        this.info = 'Mikstura Leczenia';
        this.value = 20;
        break;
      case 2:
        this.id = _typ;
        this.info = 'Mikstura Leczenia2';
        this.value = 30;
        break;
      case 3:
        this.id = _typ;
        this.info = 'Mikstura Leczenia3';
        this.value = 60;
        break;
      case 11:
        this.id = _typ;
        this.info = 'Mikstura many';
        this.value = 20;
        break;
      case 21:
        this.id = _typ;
        this.info = 'Mikstura obrony';
        this.value = 20;
        break;
      case 22:
        this.id = _typ;
        this.info = 'Mikstura obrony2';
        this.value = 20;
        break;
      case 23:
        this.id = _typ;
        this.info = 'Mikstura obrony3';
        this.value = 20;
        break;
      case 101:
        this.id = _typ;
        this.info = 'Excalibur';
        this.value = 20;
        break;
      default:
        console.log('Nieznany typ przedmiotu');
        global_error += '|nieznany typ przedmiotu podczas tworzenia |';

    }

  } //koniec else
  //Podział przedmiotów:
  //1-10 Potki dające życie
  //11-20 Potki dające manę
  //21-30 Potki zwiększające obronę
  //101-200 bronie zwiększające damage(obrażenia)
}

////////////////////
// DEFINICJA POSTACI GRACZA
////////////////////

function nowy_gracz(typ, _poziom = 1) {

  name = global_name;

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
    this.przelicz_stats();

  }

  this.przelicz_stats = function() {
    var wzmoc = Math.pow(g_mn_stats, this.poziom - 1);
    this.basic_sila = Math.round(sila * wzmoc);
    this.basic_obrona = Math.round(obrona * wzmoc);
    this.basic_hp = Math.round(hp * wzmoc);
    this.basic_hp_max = Math.round(hp * wzmoc);

    this.add_sila;
    this.add_obrona;
    this.add_hp_max;

    this.sila = this.basic_sila;
    this.obrona = this.basic_obrona;
    this.hp = this.basic_hp;
    this.hp_max = this.basic_hp_max;
  }

  this.poziom = _poziom;
  this.rasa = rasa;

  this.przelicz_stats();

  //wypisz co w sobie masz
  this.print = function() {
    console.log('rasa: ' + this.rasa + ', poziom: ' + this.poziom + ', siła: ' + this.sila + ', obrona: ' + this.obrona + ', hp: ' + this.hp + '/' + this.hp_max);
  }

  this.jaki_poziom = function() {
    console.log('Obliczam poziom gracza');
    //ile potrzeba exp na kolejny poziom?
    var ile_exp = 20*this.poziom;
    if (this.exp>=ile_exp) {
      this.levelup();
      console.log('Levelup! Twój level: '+this.poziom);
    }
  }

  //NA START
  this.ekwipunek = [item1, item2, item3, item4];
  this.gold = 1000;
  this.exp = 10;


}

////////////////////
// DEFINICJA POTWORA
////////////////////

function potwor(typ, _poziom) {

  if (!_poziom >= 1) {
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
    var wzmoc = Math.pow(g_mn_stats, _poziom - 1);

    this.rasa = rasa;
    this.sila = Math.round(sila * wzmoc);
    this.obrona = Math.round(obrona * wzmoc);
    this.hp = Math.round(hp * wzmoc);
    this.hp_max = Math.round(hp * wzmoc);
    this.gold = Math.round(gold * wzmoc);
    this.exp = Math.round(exp * wzmoc);
    this.zywy = true;
    //wypisz co w sobie ma
    this.print = function() {
      console.log('rasa: ' + this.rasa + ', siła: ' + this.sila + ', obrona: ' + this.obrona + ', hp: ' + this.hp + '/' + this.hp_max);
    }
  } //koniec else poziom
}


//END
