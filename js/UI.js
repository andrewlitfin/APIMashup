function buildUI(){
    //identify the div to append content to
    var contentDiv = document.querySelector("#jsContent");

    //Header
    var mainHeader = document.createElement('h2');
    mainHeader.innerHTML = "Search the Marvel Comics Database!";
    contentDiv.appendChild(mainHeader);

    //Selector for search type
    var searchTypeSelector = document.createElement('select');
    searchTypeSelector.id = "searchType";
    contentDiv.appendChild(searchTypeSelector);

    //Options for search type selector
    var characterOption = document.createElement('option');
    characterOption.value = 'character';
    characterOption.innerHTML = 'Character'; searchTypeSelector.appendChild(characterOption);
    var comicOption = document.createElement('option');
    comicOption.value = 'comic';
    comicOption.innerHTML = 'Comic'; searchTypeSelector.appendChild(comicOption);
    var creatorsOption = document.createElement('option');
    creatorsOption.value = 'creators';
    creatorsOption.innerHTML = 'Creators'; searchTypeSelector.appendChild(creatorsOption);
    var eventsOption = document.createElement('option');
    eventsOption.value = 'events';
    eventsOption.innerHTML = 'Events'; searchTypeSelector.appendChild(eventsOption);
    var seriesOption = document.createElement('option');
    seriesOption.value = 'series';
    seriesOption.innerHTML = 'Series'; searchTypeSelector.appendChild(seriesOption);
    var storiesOption = document.createElement('option');
    storiesOption.value = 'stories';
    storiesOption.innerHTML = 'Stories'; searchTypeSelector.appendChild(storiesOption);
    
    //Create an area for the search options, and set a default state
    var searchOptionsDiv = document.createElement('div');
    searchOptionsDiv.id = "searchOptions";
    contentDiv.appendChild(searchOptionsDiv);
    
    var nameFieldTitle = document.createElement('p');
    nameFieldTitle.innerHTML = "Character Name: ";
    searchOptionsDiv.appendChild(nameFieldTitle);

    var nameField = document.createElement('input');
    nameField.type = 'text';
    nameFieldTitle.appendChild(nameField);
   
    //change the search options based on the search option selector 
    document.querySelector("#searchType").onchange = function (e){
        //clear the search options
        searchOptionsDiv.innerHTML = "";
        
        //repopulate the search options based on the value of the search option selector
        switch(e.target.value){
            case "character":
                console.log("Character");
                
                var nameFieldTitle = document.createElement('p');
                nameFieldTitle.innerHTML = "Character Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameFieldTitle.appendChild(nameField);
                
                break;
            case "comic":
                console.log("Comic");
                
                //Title
                var dateRangeTitle = document.createElement('p');
                dateRangeTitle.innerHTML = "Search Comic From:";
                searchOptionsDiv.appendChild(dateRangeTitle);
                
                //Start Date
                var startDateTitle = document.createElement('p');
                startDateTitle.innerHTML = "Start Date: ";
                searchOptionsDiv.appendChild(startDateTitle);
                var startDateField = document.createElement('input');
                startDateField.type = 'text';
                startDateField.value = "YYYY-MM-DD";
                searchOptionsDiv.appendChild(startDateField);
                
                //End Date
                var endDateTitle = document.createElement('p');
                endDateTitle.innerHTML = "Start Date: ";
                searchOptionsDiv.appendChild(endDateTitle);
                var endDateField = document.createElement('input');
                endDateField.type = 'text';
                endDateField.value = "YYYY-MM-DD";
                searchOptionsDiv.appendChild(endDateField);
            
                break;
            case "creators":
                console.log("Creators");
                
                var nameFieldTitle = document.createElement('p');
                nameFieldTitle.innerHTML = "Creator Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameFieldTitle.appendChild(nameField);
                
                break;
            case "events":
                console.log("Events");
                
                var nameFieldTitle = document.createElement('p');
                nameFieldTitle.innerHTML = "Event Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameFieldTitle.appendChild(nameField);
                
                break;
            case "series":
                console.log("Series");
                
                var nameFieldTitle = document.createElement('p');
                nameFieldTitle.innerHTML = "Series Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameFieldTitle.appendChild(nameField);
                
                break;
            case "stories":
                console.log("Stories");
                
                var nameFieldTitle = document.createElement('p');
                nameFieldTitle.innerHTML = "Story Name: ";
                searchOptionsDiv.appendChild(nameFieldTitle);
                
                var nameField = document.createElement('input');
                nameField.type = 'text';
                nameFieldTitle.appendChild(nameField);
                
                break;
            default:
                console.log("Default");
                break;
        }
    };
}