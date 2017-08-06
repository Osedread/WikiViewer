const openerBtn = document.getElementById("openerBtn");
const searchDiv = document.querySelector(".searchDiv");
const resultsDiv = document.querySelector(".resultsContainer");
const container = document.getElementById("container");

const op = () => {
    
    openerBtn.classList.add("animateFadeOut");
    
    let delayPopIn = setTimeout(function() {
        // Make Search Icon fade out, fading in the search bar afterwards.
        if (openerBtn.classList.contains("animateFadeOut")) {
            container.removeChild(openerBtn);
            searchDiv.style.display = "flex";
            // resultsDiv.style.display = "flex";
            searchDiv.classList.add("fadeIn");
        }
    }, 1000);
};


openerBtn.addEventListener("click", op, false);
