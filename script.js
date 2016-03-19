function myFunction(){
   	document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}  

function hideall(){
    document.getElementById("about").className = "hide";
    document.getElementById("contact").className = "hide";
    document.getElementById("media").className = "hide";
}

function about(){
	document.getElementById("about").className = "show";
	document.getElementById("media").className = "hide";
}

function media(){
	document.getElementById("media").className = "show";
	document.getElementById("about").className = "hide";
}

