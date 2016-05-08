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
    comicOption.value = 'character';
    comicOption.innerHTML = 'Character'; searchTypeSelector.appendChild(characterOption);
    var comicOption = document.createElement('option');
    comicOption.value = 'comic';
    comicOption.innerHTML = 'Comic'; searchTypeSelector.appendChild(comicOption);
    var creatorsOption = document.createElement('option');
    comicOption.value = 'creators';
    comicOption.innerHTML = 'Creators'; searchTypeSelector.appendChild(creatorsOption);
    var eventsOption = document.createElement('option');
    comicOption.value = 'events';
    comicOption.innerHTML = 'Events'; searchTypeSelector.appendChild(eventsOption);
    var seriesOption = document.createElement('option');
    comicOption.value = 'series';
    comicOption.innerHTML = 'Series'; searchTypeSelector.appendChild(seriesOption);
    var storiesOption = document.createElement('option');
    comicOption.value = 'stories';
    comicOption.innerHTML = 'Stories'; searchTypeSelector.appendChild(storiesOption);
}