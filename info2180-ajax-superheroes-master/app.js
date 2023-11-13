document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.querySelector("#searchButton");
    var searchInput = document.querySelector("#searchInput"); 
    var result = document.querySelector("#result");

    searchButton.addEventListener("click", function () {
        
        var xrequest = new XMLHttpRequest();
        xrequest.open("GET", "superheroes.php?query=" + encodeURIComponent(searchInput.value.trim()), true);

        xrequest.onreadystatechange = function () {
            if (xrequest.readyState === XMLHttpRequest.DONE) {
                handleAjaxResponse(xrequest);
            }
        };

        xrequest.send();
    });

    function handleAjaxResponse(xrequest) {
        if (xrequest.status === 200) {
            result.innerHTML = xrequest.responseText;
        } else {
            result.innerHTML = "Error: This resquest can not be performed";
        }
    }
});
