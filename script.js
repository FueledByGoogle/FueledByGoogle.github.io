function myFunction(){
   	document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}  

function hideall(){
   //  $( "#title" ).fadeIn( "slow", function() {
  	// });
    // $( "#about" ).fadeOut("fast"), function() {
    // };
    // $( "#media" ).fadeOut("slow"), function() {
    // };
    $('#media, #contact, #about').fadeOut(300);
}

function about(){
	// $( "#about" ).fadeIn("slow"), function() {
 //  	};
	// $( "#media" ).fadeOut("slow"), function() {
 //  	};
  	// $( "#title" ).fadeTo(600,0), function() {
  	// };

        
  	$('#media, #contact').fadeOut(300);
	$('#about').delay(400).fadeIn(300);

}

function contact(){

  	$('#media, #about').fadeOut(300);
	$('#contact').delay(400).fadeIn(300);

}

function media(){
	// $( "#media" ).fadeIn("slow"), function() {
 //  	};
	// $( "#about" ).fadeOut("slow"), function() {
 //  	};

  	$('#about, #contact').fadeOut(300);
	$('#media').delay(400).fadeIn(300);
}

