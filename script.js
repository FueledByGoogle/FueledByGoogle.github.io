function myFunction() {
   	document.getElementsByClassName("menu")[0].classList.toggle("responsive");
}  

function hideall()
{
    document.getElementById(about).className = "hide";
    document.getElementById(contact).className = "hide";

}

function about(){

	document.getElementById(about).className = "show";
	document.getElementById(contact).className = "hide";

}