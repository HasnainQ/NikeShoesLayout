function openNav() {
  document.getElementById("mySidenav").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// header close

$(".owl-carousel").owlCarousel({
  loop: true,
  items: 1,
  margin: 10,
  nav: true,
});
