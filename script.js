function myFunction() {
  document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}  

function hideall() {
  $('#social, #contact, #about, #projects').fadeOut(300);
  $('#title').delay(400).fadeIn(300);
}

function about() {
        
  $('#social, #contact, #projects, #title').fadeOut(300);
  $('#about').delay(400).fadeIn(300);

}

function contact() {

  $('#social, #about, #projects, #title').fadeOut(300);
  $('#contact').delay(400).fadeIn(300);

}

function social() {
  $('#about, #contact, #projects, #title').fadeOut(300);
  $('#social').delay(400).fadeIn(300);
}

function projects() {
   $('#about, #contact, #social, #title').fadeOut(300);
   $('#projects').delay(400).fadeIn(300);
}