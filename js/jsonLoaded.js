function jsonLoaded(obj){
//    console.log("obj = " +obj);
//    console.log("obj stringified = " + JSON.stringify(obj));            

    // if there's an error, print a message and return
    if (obj.code != 200){
        var status = obj.status;
        document.querySelector("#content").innerHTML = "<h3><b>Error!</b></h3>" + "<p><i>" + status + "</i><p>";
        //$("#content").fadeIn(500);
        return; // Bail out
    }
    // if there are no results, print a message and return
    if(obj.data.count == 0){
        var status = "No results found";
        document.querySelector("#content").innerHTML = "<p><i>" + status + "</i></p>";
        //$("#content").fadeIn(500);
        return; // Bail out
    }
    
    //if there are results, put them on the screen
    var content = document.querySelector("#content");
    content.innerHTML = "";

    var searchType = document.querySelector("#searchType").value;
    switch(searchType){
        case "character":
            //Find the images of all characters returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#characterName").value;
                    image.onclick = expandResult;
                    content.appendChild(image);
                }
            }
            
            break;
        case "comic":
            //Find the images of all comics returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    var title = results[i].title;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = title;
                    image.onclick = expandResult;
                    content.appendChild(image);
                }
            }
            
            break;
        case "creators":
            //Find the images of all creators returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#creatorFirstName").value + " " + document.querySelector("#creatorLastName").value;
                    image.onclick = expandResult;
                    content.appendChild(image);
                }
            }
            
            break;
        case "events":
            //Find the images of all events returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#eventName").value;
                    image.onclick = expandResult;
                    content.appendChild(image);
                }
            }
            
            break;
        case "series":
            //Find the images of all series returned and display them
            var results = obj.data.results;
            for (var i = 0; i < results.length; i++){
                if(results[i].thumbnail.path){
                    var path = results[i].thumbnail.path;
                    var extension = results[i].thumbnail.extension;
                    //create the element
                    var image = document.createElement('img');
                    image.src = path+ "." + extension;
                    image.alt = document.querySelector("#seriesName").value;
                    image.onclick = expandResult;
                    content.appendChild(image);
                }
            }
            
            break;
        default:
            console.log("FAILED SEARCH SELECT ERROR");
            break;
    }
    
    $("#content").fadeIn(250);
}
function jsonError(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR);
    console.log(textStatus);
    console.log(errorThrown);
    
    document.querySelector("#content").innerHTML = "<p><i>Error</i>: " + JSON.parse(jqXHR.responseText).status + "</p>";
}