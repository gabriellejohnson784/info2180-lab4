document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.querySelector("#searchButton");
    var searchInput = document.querySelector("#searchInput"); // Assuming you have an input field with id "searchInput"
    var result = document.querySelector("#result");

    searchButton.addEventListener("click", function () {
        // Perform AJAX request
        var xrequest = new XMLHttpRequest();
        xrequest.open("GET", "superheroes.php?query=" + encodeURIComponent(searchInput.value.trim()), true);

        xrequest.onreadystatechange = function () {
            if (xrequest.readyState === XMLHttpRequest.DONE) {
                handleAjaxResponse(xrequest);
            }
        };

        xrequest.onerror = function () {
            console.error("Error: There was a network error.");
        };

        xrequest.send();
    });

    function handleAjaxResponse(xrequest) {
        if (xrequest.status === 200) {
            result.innerHTML = xrequest.responseText;
        } else {
            console.error("Error: HTTP request failed with status", xrequest.status);
        }
    }
});
