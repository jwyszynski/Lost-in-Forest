//z funkci globalnej, podsawowej
  var global_name, global_error;
  global_name = 'Aleksander Wielki';

  var potwor1 = new potwor('dzik', 1);
  var potwor2 = new potwor('dzik', 2);
  var potwor3 = new potwor('dzik', 3);
  var potwor4 = new potwor('dzik', 4);

////////////////////////
// ODPALAMY, DODAJEMY GRACZA
////////////////////////

var gracz = {
  postac : new postac_gracza('wojownik'),
  name : global_name,

  levelup : function() {
    this.postac.levelup();
    console.log('levelup');
  },

  //NA START
  gold : 100,
  exp : 100,

  print : function() {
    console.log('Name: '+this.name+' Gold: '+this.gold+' Exp: '+this.exp+'\nTwoja postać: '+'rasa: '+this.postac.rasa+', poziom: '+this.postac.poziom+', siła: '+this.postac.sila+', obrona: '+this.postac.obrona+', hp: '+this.postac.hp);
  },

  jaki_poziom : function() {
    console.log('Obliczam poziom gracza');
    //ile potrzeba exp na kolejny poziom?
    var ile_exp = 20*gracz.postac.poziom;
    if (gracz.exp>=ile_exp) {
      gracz.postac.levelup();
    }
  }

}

////////////////////////
// WALKA, CZYLI WOJNA OBIEKTÓW
////////////////////////

var walka = {
  info : function() {
    console.log('Możesz wywołać:\n - walka.runda(jaki_potwor) - aby wykonac runde z potworem\n - walka.gracz_uderza_potwora()\n - walka.potwor_uderza_gracza()');
  },

  start : function() {
    console.log('Startuję walkę!');

    while (this.gracz_uderza_potwora()) {
      console.log('walka trwa');
    }
  },

  runda : function(_potwor) {
    if (_potwor!=null) {
    console.log('rozpoczęła się runda');
    this.gracz_uderza_potwora(_potwor);
    this.potwor_uderza_gracza(_potwor);
  } else {
    console.log('podaj potwora - walka.runda(jaki_potwor)');
  }
  },

  mnoznik_obrazen : function(_obrona) {
    var mnoznik_obrazen;
    if (_obrona>=0) {
      mnoznik_obrazen = 100/(100+_obrona);
    } else if (_obrona<0) {
      mnoznik_obrazen = 2- 100/(100-_obrona);
    } else {
      console.log('Niepoprawny mnożnik obrażeń');
    }
    return mnoznik_obrazen;
  },

  gracz_uderza_potwora : function(_potwor) {
    if (_potwor.zywy===true) {
    var mnoznik_obrazen = this.mnoznik_obrazen(_potwor.obrona);

    var obrazenia = Math.round(gracz.postac.sila*mnoznik_obrazen);
    _potwor.hp -= obrazenia;
    console.log('uderzam z siłą: '+obrazenia);
    this.odswiez(_potwor);
    return true;
  } else {
    return false;
  }
  },

  potwor_uderza_gracza : function(_potwor) {
    if (_potwor.zywy===true) {
    var mnoznik_obrazen = this.mnoznik_obrazen(gracz.postac.obrona);

    var obrazenia = Math.round(_potwor.sila*mnoznik_obrazen);
    gracz.postac.hp -= obrazenia;
    console.log('Zostałeś uderzony z siłą: '+obrazenia);
    this.odswiez(_potwor);
    return true;
    } else {
      return false;
    }
  },

  //po każdym ruchu trzeba by odswieżyć widok i dać informacje co zostało lub że coś zostanie wykonane bo np. zmienna hp spadła do "0"

  odswiez : function(_potwor) {
    if (_potwor.hp<0) {
      _potwor.hp=0;
    }
    console.log('po tym ruchu gracz: ')+gracz.postac.print();
    console.log('po tym ruchu potwor: ')+_potwor.print();
    if (gracz.postac.hp<=0) {
      this.przegrana();
    } else if (_potwor.hp<=0) {
      this.wygrana();
    }
  },

  przegrana : function() {
    console.log('UMARŁEŚ!');
    //Zacznij od nowa albo coś...
  },

  wygrana : function() {
    console.log('Zabiłeś Potwora: '+potwor1.rasa+', Twoja nagroda -> gold: '+potwor1.gold+' exp: '+potwor1.exp);
    gracz.gold += potwor1.gold;
    gracz.exp += potwor1.exp;
    potwor1.zywy = false;
  }

}






//END
