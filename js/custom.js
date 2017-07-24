
var openerBtn = document.getElementById("openerBtn");
var searchDiv = document.getElementById("searchDiv");
var container = document.getElementById("container");


function opening() {
    openerBtn.classList.add("animateFadeOut");
    var delayPopIn = setTimeout(function() {
        if (openerBtn.classList.contains("animateFadeOut")) {
            container.removeChild(openerBtn);
            searchDiv.classList.add("fadeIn");
        }
    }, 1000);    
}


openerBtn.addEventListener("click", opening, false);

// Create an XMLHttpRequest Object
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "";
// Open the request and pass the HTTP Method and the resource
// request.open("GET", "");