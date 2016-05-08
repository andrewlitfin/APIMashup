function jsonLoaded(obj){
    console.log("obj = " +obj);
    console.log("obj stringified = " + JSON.stringify(obj));            

    // if there's an error, print a message and return
    if (obj.code != 200){
        var status = obj.status;
        document.querySelector("#content").innerHTML = "<h3><b>Error!</b></h3>" + "<p><i>" + status + "</i><p>";
        $("#content").fadeIn(500);
        return; // Bail out
    }
    // if there are no results, print a message and return
    if(obj.data.count == 0){
        var status = "No results found";
        document.querySelector("#content").innerHTML = "<p><i>" + status + "</i><p>" + "<p><i>";
        $("#content").fadeIn(500);
        return; // Bail out
    }
}