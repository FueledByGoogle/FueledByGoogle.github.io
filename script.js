function myFunction() {
  document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}  

function hideall() {
  $('#social, #contact, #about').fadeOut(300);
}

function about() {
        
  $('#social, #contact').fadeOut(300);
  $('#about').delay(400).fadeIn(300);

}

function contact() {

  $('#social, #about').fadeOut(300);
  $('#contact').delay(400).fadeIn(300);

}

function social() {
  $('#about, #contact').fadeOut(300);
  $('#social').delay(400).fadeIn(300);
}

function projects() {
   $('#about, #contact, #social').fadeOut(300);
   $('#projects').delay(400).fadeIn(300);
}

