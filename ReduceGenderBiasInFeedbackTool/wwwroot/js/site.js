// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getAnalysis(userInput) {
    return fetch(`Index?handler=AnalyzeFeedback&text=${userInput}`)
        .then((response) => {
            return response.text();
        })
}

function updateMarker(sentiment) {
    $("#markerValue").text(sentiment);
}

function updateAnalysis() {

    var userInput = $("#Message").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker(sentiment);
        });
}

$("#Message").on('change input paste', updateAnalysis)