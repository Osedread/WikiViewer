const openerBtn = document.getElementById("openerBtn");
const searchDiv = document.getElementById("searchDiv");
const container = document.getElementById("container");

const op = () => {
    openerBtn.classList.add("animateFadeOut");
    let delayPopIn = setTimeout(function() {
        if (openerBtn.classList.contains("animateFadeOut")) {
            container.removeChild(openerBtn);
            searchDiv.classList.add("fadeIn");
        }
    }, 1000);
}


openerBtn.addEventListener("click", op, false);
