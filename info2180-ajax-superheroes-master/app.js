document.addEventListener("DOMContentLoaded", function () {
    var searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", function () {
        // Perform AJAX request
        var xrequest = new XMLHttpRequest();
        xrequest.open("GET", "superheroes.php", true);

        xrequest.onreadystatechange = function () {
            if (xrequest.readyState === XMLHttpRequest.DONE) {
                if (xrequest.status === 200) {
                    alert(xrequest.responseText);
                } else {
                    console.error("Error: HTTP request failed with status", xrequest.status);
                }
            }
        };

        xrequest.onerror = function () {
            console.error("Error: There was a network error.");
        };

        xrequest.send();
    });
});

