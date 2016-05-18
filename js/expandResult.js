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
            html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.name].description + "</p>";
            break;
        case "comic":
            break;
        case "creators":
            break;
        case "event":
            break;
        case "series":
            break;
        default:
            document.querySelector("#statusText").innerHTML = "<p><i>Error</i>: This should never happen.";
            break;
    }

    document.querySelector("#expanded").innerHTML = html;
};