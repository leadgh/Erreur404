//Ouvrir la sidenav
function openNav() {
  document.getElementById("mySidenav").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

//Fermer la sidenav
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}