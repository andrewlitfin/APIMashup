function expandResult(e){
    console.log("Expand");
    console.log(e);
    
    var imgClicked = e.target;
    
    var html = "";
    html += "<h1>" + imgClicked.dataset.name + "</h1>";
    html += "<img src='" + imgClicked.src + "'/>";
    html += "<p>" + MarvelReturnedEntries[imgClicked.dataset.name].description + "</p>";
    document.querySelector("#expanded").innerHTML = html;
};