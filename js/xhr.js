// Cache the variables
const searchBtn = document.getElementById("searchBtn");
const randomBtn = document.getElementById("randomBtn");

function searchClick(event) {
    const searchResults = document.querySelector(".resultsContainer");
    searchResults.innerHTML = "";
    // Cache the input
    const text = document.getElementById("searchBox").value;
    
    // Create an XMLHttpRequest Object
    const xhr = new XMLHttpRequest(),
        APIurl = 'https://en.wikipedia.org/w/api.php?' +
    'action=query&list=search&srsearch=' + text +
    '&srwhat=text&utf8=&format=json&origin=*';

    // Open the request and pass the HTTP Method and the resource
    xhr.open("GET", APIurl);
    
    xhr.send();
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState === 4 && xhr.status == 200) {
            // Declare all the variables needed and parse the response to JSON
            let text = xhr.responseText;
            textJSON = JSON.parse(text);
            const results = textJSON.query.search;
                        
            for (let i = 0; i < results.length; i++) {
                const title = results[i].title,
                    snippet = results[i].snippet;
                const card = document.querySelector(".resultsCard");
                const url = title.replace(/\s/g,"_");
                console.log(url);
                searchResults.innerHTML += "<a href='https://en.wikipedia.org/wiki/" + url + "' ><div class='resultsCard'><div class='resultsTitle'><h5>" + title + "</h5></div>" + "<div class='snippet'><p>" + snippet + "</p></div></div></a>";
                
            }
        }
    }
}
    
window.addEventListener("keypress", function(event) {
    if (event.which === 13) {
        searchClick();
    }
}, true);
searchBtn.addEventListener("click", searchClick, true);