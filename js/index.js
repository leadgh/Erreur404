
//test par alerte taille de la fenêtre
var message = 'La taille de votre fenêtre est de ' + window.innerWidth + 'x' + window.innerHeight + '.';
if (window.innerWidth >= 940){
    message += "Il est au format desktop";
} else {
    message += "Il est au format mobile";
}
alert(message);

if(window.innerWidth > 940){
  //Ouvrir la sidenav dans le contenu
  function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.getElementById("main").style.marginLeft = "25%";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
} else if(window.innerWidth < 940){ 
  //Ouvrir la sidenav sur le contenu
  function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
}
//Fermer la sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

animate = true;
//Animation
function animation(){
  alert("Vous avez appuyez sur le bouton");
  if(animate){
      document.getElementById("astronaute").classList.add("animate");
  }
  else{
      document.getElementById("astronaute").classList.remove("animate");
  }
  animate = !animate;
}