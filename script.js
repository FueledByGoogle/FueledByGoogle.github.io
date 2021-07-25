function openMenu() {
  document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}  

function hideall() {
  $('#contact, #about, #projects').fadeOut(300);
  $('#title').delay(400).fadeIn(300);
}

function about() {
        
  $('#contact, #projects, #title').fadeOut(300);
  $('#about').delay(400).fadeIn(300);

}

function contact() {

  $('#about, #projects, #title').fadeOut(300);
  $('#contact').delay(400).fadeIn(300);

}

function projects() {
   $('#about, #contact, #title').fadeOut(300);
   $('#projects').delay(400).fadeIn(300);
}