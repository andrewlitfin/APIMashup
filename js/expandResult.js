function expandResult(e){
    console.log("Expand");
    console.log(e);
    
    var imgClicked = e.target;
    
    var html = "";
    
    var searchType = document.querySelector("#searchType").value;
    switch (searchType) {
        case "character":
            html += "<h1>" + imgClicked.dataset.name + "</h1>";
            html += "<img src='" + imgClicked.src + "'/>";
            html += "<h3>Comics Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].comics.available + "</h3>";
            html += "<h3>Series Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].series.available + "</h3>";
            html += "<h3>Stories Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].stories.available + "</h3>";
            html += "<h3>Events Appeared In: " + MarvelReturnedEntries[imgClicked.dataset.name].events.available + "</h3>";
            if (MarvelReturnedEntries[imgClicked.dataset.name].description != null && MarvelReturnedEntries[imgClicked.dataset.name].description != "") html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.name].description + "</p>";
            else html += "No Description Available";
            break;
        case "comic":
            html += "<h1>" + imgClicked.dataset.title + "</h1>";
            html += "<img src='" + imgClicked.src + "'/>";
            html += "<h3> Series: " + MarvelReturnedEntries[imgClicked.dataset.title].series.name + "</h3>";
            html += "<h3> Creator: " + MarvelReturnedEntries[imgClicked.dataset.title].creators.items.name + "</h3>";
            html += "<h3> Price: $" + MarvelReturnedEntries[imgClicked.dataset.title].prices.price + "</h3>";
            if (MarvelReturnedEntries[imgClicked.dataset.title].description != null) html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.title].description + "</p>";
            else html += "No Description Available";
            break;
        case "creators":
            html += "<h1>" + imgClicked.dataset.fullName + "</h1>";
            html += "<img src='" + imgClicked.src + "'/>";
            html += "<h3>" + imgClicked.dataset.fullName + " has worked on:</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].comics.available + " Comics</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].series.available + " Series</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].stories.available + " Stories</h3>";
            html += "<h3>" + MarvelReturnedEntries[imgClicked.dataset.fullName].events.available + " Events</h3>";
            break;
        case "events":
            html += "<h1>" + imgClicked.dataset.title + "</h1>";
            html += "<img src='" + imgClicked.src + "'/>";
            html += "<h3> Work by " + MarvelReturnedEntries[imgClicked.dataset.title].creators.available + " different creators.</h3>";
            html += "<h3> With " + MarvelReturnedEntries[imgClicked.dataset.title].characters.available + " characters appearing in " + MarvelReturnedEntries[imgClicked.dataset.title].comics.available + " comics and " + MarvelReturnedEntries[imgClicked.dataset.title].series.available + " series.</h3>";
            if (MarvelReturnedEntries[imgClicked.dataset.title].description != null) html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.title].description + "</p>";
            else html += "No Description Available";
            break;
        case "series":
            html += "<h1>" + imgClicked.dataset.title + "</h1>";
            html += "<img src='" + imgClicked.src + "'/>";
            html += "<p>Featuring " + MarvelReturnedEntries[imgClicked.dataset.title].comics.available + " comics written by " + MarvelReturnedEntries[imgClicked.dataset.title].creators.available + " different creators.</p>"
            if (MarvelReturnedEntries[imgClicked.dataset.title].description != null) html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.title].description + "</p>";
            else html += "No Description Available";
            break;
        default:
            document.querySelector("#statusText").innerHTML = "<p><i>Error</i>: This should never happen.";
            break;
    }

    var expanded = document.querySelector("#expanded");
    expanded.style.visibility = "visible";
    expanded.innerHTML = html;
};