// Cache the variables
const searchBtn = document.getElementById("searchBtn");
const randomBtn = document.getElementById("randomBtn");
const eventEnter = document.getElementById("searchBox");


function searchClick(event) {
    // Cache the input
    let text = document.getElementById("searchBox").value;
    console.log(text);
    // Create an XMLHttpRequest Object
    const xhr = new XMLHttpRequest(),
        url = 'https://en.wikipedia.org/w/api.php?' +
    'action=query&list=search&srsearch=' + text +
    '&srwhat=text&utf8=&format=json&origin=*';

    // Open the request and pass the HTTP Method and the resource
    xhr.open("GET", url);
    // xhr.setRequestHeader('Api-User-Agent', 'http://localhost:5500' );
    xhr.send();
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState === 4 && xhr.status == 200) {
            // Declare all the variables needed and parse the response to JSON
            let text = xhr.responseText;
            const searchResults = document.querySelector(".resultsContainer");
            textJSON = JSON.parse(text);
            const results = textJSON.query.search;
                        
            for (let i = 0; i < results.length; i++) {
                const title = results[i].title;
                const card = document.querySelector(".resultsCard");
                const snippet = results[i].snippet;
                
                
                searchResults.innerHTML += "<div class='resultsCard'><div class='resultsTitle'>" + title + "</div>" + "<div class='snippet'>" + snippet + "</div></div>";
                
            }
            
            
            // textJSON.query.search





            // searchResults.innerHTML = textJSON;
            

        }
    }
    

    return false;
}  

function setArticles(data) {
    data.query.search.forEach(function(article) {
        



    }, this);
}


window.addEventListener("keypress", function(event) {
    if (event.which === 13) {
        searchClick();
    }
}, true);
searchBtn.addEventListener("click", searchClick, true);




// // callback is the name of function which receive data
// // like var callback = 'wikiSearchDataHandler';
// // and define function like:
// // function wikiSearchDataHandler(searchObject) { ... }

// // this is the JSONP trick
// const script = document.createElement('script');
// script.type = 'text/javascript';
// script.src = url;
// document.head.appendChild(script);