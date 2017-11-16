//z funkci globalnej, podsawowej

  var global_name, global_error, g_mn_stats;
  g_mn_stats = 1.3; //Przelicznik statystyk co poziom, o tyle zwiększa się dana statystyka co 1 poziom
  global_name = 'Aleksander Wielki';

  var potwor1 = new potwor('dzik', 1);
  var potwor2 = new potwor('dzik', 2);
  var potwor3 = new potwor('dzik', 3);
  var potwor4 = new potwor('dzik', 4);

  var item1 = new give_item(1);
  var item2 = new give_item(11);
  var item3 = new give_item(21);
  var item4 = new give_item(101);

////////////////////////
// ODPALAMY, DODAJEMY GRACZA
////////////////////////

var gracz = new nowy_gracz('zabujca', 1);


////////////////////////
// WALKA, CZYLI WOJNA OBIEKTÓW
////////////////////////

var walka = {
  info : function() {
    console.log('Możesz wywołać:\n - walka.runda(jaki_potwor) - aby wykonac runde z potworem\n - walka.gracz_uderza_potwora()\n - walka.potwor_uderza_gracza()');
  },

  start : function() {
    console.log('Startuję walkę! .. żartuję');

  },

  runda : function(_potwor) {
    if (_potwor.zywy===true) {
    console.log('rozpoczęła się runda');
    this.ruch_gracza(_potwor, 1);
    this.ruch_przeciwnika(_potwor);
  } else {
    console.log('Potwór nie jest żywy');
  }
  },

  ruch_gracza : function(_potwor, _typ=1) {
    if (_typ==1) {
      this.gracz_uderza_potwora(_potwor, gracz.sila);
    } else if (_typ==2) {
      this.odbierz_zycie(_potwor, gracz.sila);
    }
  },

  ruch_przeciwnika : function(_potwor, _typ=1) {
    this.potwor_uderza_gracza(_potwor, _potwor.sila);
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

  gracz_uderza_potwora : function(_potwor, _obrazenia=0) {
    if (_potwor.zywy===false) return false;
    var mnoznik_obrazen = this.mnoznik_obrazen(_potwor.obrona);

    var obrazenia = Math.round(_obrazenia*mnoznik_obrazen);
    this.odbierz_zycie(_potwor, obrazenia);
    console.log('Uderzam z siłą: '+obrazenia);
    this.odswiez(_potwor);
  },

  potwor_uderza_gracza : function(_potwor, _obrazenia=0) {
    if (_potwor.zywy===false) return false;
    var mnoznik_obrazen = this.mnoznik_obrazen(gracz.obrona);

    var obrazenia = Math.round(_obrazenia*mnoznik_obrazen);
    this.odbierz_zycie(gracz, obrazenia);
    console.log('Zostałeś uderzony z siłą: '+obrazenia);
    this.odswiez(_potwor);
  },

  odbierz_zycie : function(_komu, _ile) {
    _komu.hp -= _ile;
  },

  //po każdym ruchu trzeba by odswieżyć widok i dać informacje co zostało lub że coś zostanie wykonane bo np. zmienna hp spadła do "0"

  odswiez : function(_potwor) {
    if (_potwor.hp<0) {
      _potwor.hp=0;
    }
    console.log('po tym ruchu gracz: ')+gracz.print();
    console.log('po tym ruchu potwor: ')+_potwor.print();
    if (gracz.hp<=0) {
      this.przegrana();
    } else if (_potwor.hp<=0) {
      this.wygrana(_potwor);
    }
  },

  przegrana : function() {
    console.log('UMARŁEŚ!');
    //Zacznij od nowa albo coś...
  },

  wygrana : function(_potwor) {
    console.log('Zabiłeś Potwora: '+_potwor.rasa+', Twoja nagroda -> gold: '+_potwor.gold+' exp: '+_potwor.exp);
    gracz.gold += _potwor.gold;
    gracz.exp += _potwor.exp;
    gracz.hp = gracz.hp_max;
    console.log('Zostałeś uleczony');
    _potwor.zywy = false;
  }

}

////////////////////////
// INFO
////////////////////////

info = function() {
  console.log('Witaj w grze Lost in Forest - It\'s Dev Time! ');
}





window.onload = info();

//END
