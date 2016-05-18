function expandResult(e) {
    "use strict";
    
    var imgClicked = e.target;
    
    var html = "";
    
    var searchType = document.querySelector("#searchType").value;
    switch (searchType) {
        case "character":
            //Display the name of the character as a main header
            html += "<h1>" + imgClicked.dataset.name + "</h1>";
            //Thumbnail image for the character
            html += "<img src='" + imgClicked.src + "'/>";
            //Comics the character has appeared in
            html += "<h3>Comics Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].comics.available + "</h3>";
            //Series the character has appeanred in
            html += "<h3>Series Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].series.available + "</h3>";
            //Stories the character has appeared in
            html += "<h3>Stories Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].stories.available + "</h3>";
            //Events the character has appeared in
            html += "<h3>Events Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].events.available + "</h3>";
            //If there is a description for the character available, display it
            //Otherwise write no description available
            if (MarvelReturnedEntries[imgClicked.dataset.name].description != null && MarvelReturnedEntries[imgClicked.dataset.name].description != "") {
                html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.name].description + "</p>";
            }
            else html += "No Description Available";
            break;
        case "comic":
            //The name of the comic as a main header
            html += "<h1>" + imgClicked.dataset.title + "</h1>";
            //Thumbnail image for the comic
            html += "<img src='" + imgClicked.src + "'/>";
            //Name of the series the comic is a part of
            html += "<h3> Series: " + MarvelReturnedEntries[imgClicked.dataset.title].series.name + "</h3>";
            //List the creators who worked on the comic
            for (var i = 0; i <  MarvelReturnedEntries[imgClicked.dataset.title].creators.items.length; i++){
                html += "<h3> Creator: " + MarvelReturnedEntries[imgClicked.dataset.title].creators.items[i].name + ", " + MarvelReturnedEntries[imgClicked.dataset.title].creators.items[i].role + "</h3>";
            }
            //List the price of the comic
            for (var i = 0; i <  MarvelReturnedEntries[imgClicked.dataset.title].prices.length; i++){
                html += "<h3>Print Price: $" + MarvelReturnedEntries[imgClicked.dataset.title].prices[i].price + "</h3>";
            }
            //If there is a description of the comic available, display it
            //Otherwise write no description available
            if (MarvelReturnedEntries[imgClicked.dataset.title].description != null) {
                html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.title].description + "</p>";
            }
            else html += "No Description Available";
            break;
        case "creators":
            //The full name of the creator as a header
            html += "<h1>" + imgClicked.dataset.fullName + "</h1>";
            //Thumbnail image for the creator
            html += "<img src='" + imgClicked.src + "'/>";
            //Credits for the creator
            html += "<h3>" + imgClicked.dataset.fullName + " has worked on:</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].comics.available + " Comics</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].series.available + " Series</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].stories.available + " Stories</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].events.available + " Events</h3>";
            break;
        case "events":
            //The title of the event as a header
            html += "<h1>" + imgClicked.dataset.title + "</h1>";
            //Thumbnail image for the event
            html += "<img src='" + imgClicked.src + "'/>";
            //Display the number of creators who worked on the event
            html += "<h3> Work by " + MarvelReturnedEntries[imgClicked.dataset.title].creators.available + " different creators.</h3>";
            //Display the number of characters, comics, and series related to the event
            html += "<h3> With " + MarvelReturnedEntries[imgClicked.dataset.title].characters.available + " characters appearing in " + MarvelReturnedEntries[imgClicked.dataset.title].comics.available + " comics and " + MarvelReturnedEntries[imgClicked.dataset.title].series.available + " series.</h3>";
            //If there is a description for the event available, display it
            //Otherwise write no description available
            if (MarvelReturnedEntries[imgClicked.dataset.title].description != null) {
                html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.title].description + "</p>";
            }
            else html += "No Description Available";
            break;
        case "series":
            //The name of the series as a header
            html += "<h1>" + imgClicked.dataset.title + "</h1>";
            //Thumbnail image for the series
            html += "<img src='" + imgClicked.src + "'/>";
            //The number of comics and number of creators who worked on them
            html += "<p>Featuring " + MarvelReturnedEntries[imgClicked.dataset.title].comics.available + " comics written by " + MarvelReturnedEntries[imgClicked.dataset.title].creators.available + " different creators.</p>"
            //If there is a description for the series available, display it
            //Otherwise write no description available
            if (MarvelReturnedEntries[imgClicked.dataset.title].description != null) {
                html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.title].description + "</p>";
            }
            else html += "No Description Available";
            break;
        default:
            document.querySelector("#statusText").innerHTML = "<p><i>Error</i>: This should never happen.";
            break;
    }

    var expanded = document.querySelector("article");
    expanded.style.visibility = "visible";
    expanded.innerHTML = html;
};