const menuIconEl = $('.menu-icon');
    const sidenavEl = $('.sidenav');
    const sidenavCloseEl = $('.sidenav__close-icon');

    // Ajouter et supprimer les noms de classe fournis
    function toggleClassName(el, className) {
      if (el.hasClass(className)) {
        el.removeClass(className);
      } else {
        el.addClass(className);
      }
    }

    // Ouvrez la navigation latérale en cliquant 
    menuIconEl.on('click', function() {
      toggleClassName(sidenavEl, 'active');
    });

    // Fermez la navigation latérale en cliquant 
    sidenavCloseEl.on('click', function() {
      toggleClassName(sidenavEl, 'active');
    });

//  clique sur bouton connexion
// recuperer l'id de la fenetre de connexion (screenconnex)
var ecran = document.getElementById("screenconnex");
// recuperer le bouton qui ouvre la fenetre de connexion 
var btn = document.getElementById("btnconnexion");
// récupération du span qui ferme l'écran
var span = document.getElementsByClassName("close")[0];
// quand l'utilisateur clique sur le bouton, ouverture de l'écran
btn.onclick = function(){
    ecran.style.display = "block";
}
// quand l'utilisateur clique sur span (x), fermeture fenetre
span.onclick = function(){
    ecran.style.display = "none";
}
// quand l'utilisateur clique n'importe ou en dehors de la fenetre
window.onclick = function(event){
    if(event.target == screen){
        ecran.style.display = "none";
    }
}


    console.log(ecran)
    console.log(btn)
    console.log(span)
    console.log(btn.onclick)
// Import données

    //Obtenir donnée du lien API
async function donneeAlbum() {
  //sur le site rapid api récupération de la partie fetch 
    let album = await fetch("https://dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com/?count=10&gender=b&maxage=40&minage=30&cc=all&email=gmail.com%252Cyahoo.com&pwlen=12&ip=a&phone=l%252Ct%252Co&uuid=false&lic=false&color=false&seed=helloworld&images=false&format=json", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "dawn2k-random-german-profiles-and-names-generator-v1.p.rapidapi.com",
        "x-rapidapi-key": "bdb90275ecmsh7a5a7d5e552db61p1f8af2jsnea8b2f4cc814"
      }
    })
    album = await album.json();
    let tableau = album;
    await console.log(tableau);
  
    //} catch (e) {
    //console.log(e);


  // récuperer les données du html par les class définies
  var username = document.getElementsByClassName('nom_album'); 
  var name = document.getElementsByClassName("nom_artiste");
  var dateExit = document.getElementsByClassName("sortie_album");
 
  // Remplie le tableau avec les données récupérées par l'API 
  function remplir(){
    for(var i = 0; i< name.length; i++){
     
        username[i].innerHTML = tableau[i].username;
        name[i].innerHTML = tableau[i].lastname;
        dateExit[i].innerHTML = tableau[i].birthday;
    }
 console.log(username)
 console.log(dateExit)
    
  }
  remplir();
  console.log(name);
  
}
donneeAlbum();