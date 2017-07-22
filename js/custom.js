
var searchIcon = document.getElementById("searchIcon");
var searchInput = document.getElementById("searchInput");

function opening() {
    searchIcon.classList.add("zoomIn");
    console.log("zoomin");
    searchInput.classList.add("fadeIn");
    console.log("fadein");
}

searchIcon.addEventListener("click", opening, false);
