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
