// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getAnalysis(userInput) {
    return fetch(`Index?handler=AnalyzeFeedback&text=${userInput}`)
        .then((response) => {
            return response.text();
        })
}

function updateMarker1(sentiment) {
    $("#markerValue1").text(sentiment);
}

function updateMarker2(sentiment) {
    $("#markerValue2").text(sentiment);
}

function updateMarker3(sentiment) {
    $("#markerValue3").text(sentiment);
}

function updateMarker4(sentiment) {
    $("#markerValue4").text(sentiment);
}

function updateMarker5(sentiment) {
    $("#markerValue5").text(sentiment);
}

function updateMarker6(sentiment) {
    $("#markerValue6").text(sentiment);
}

function updateAnalysis1() {

    var userInput = $("#Message1").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker1(sentiment);
        });
}


function updateAnalysis2() {

    var userInput = $("#Message2").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker2(sentiment);
        });
}

function updateAnalysis3() {

    var userInput = $("#Message3").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker3(sentiment);
        });
}

function updateAnalysis4() {

    var userInput = $("#Message4").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker4(sentiment);
        });
}

function updateAnalysis5() {

    var userInput = $("#Message5").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker5(sentiment);
        });
}

function updateAnalysis6() {

    var userInput = $("#Message6").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker6(sentiment);
        });
}

$("#bias-check1").on('click', updateAnalysis1)
$("#bias-check2").on('click', updateAnalysis1)
$("#bias-check3").on('click', updateAnalysis1)
$("#bias-check4").on('click', updateAnalysis1)
$("#bias-check5").on('click', updateAnalysis1)
$("#bias-check6").on('click', updateAnalysis1)
//$("#Message1").on('change input paste', updateAnalysis1)
//$("#Message2").on('change input paste', updateAnalysis2)
//$("#Message3").on('change input paste', updateAnalysis3)
//$("#Message4").on('change input paste', updateAnalysis4)
//$("#Message5").on('change input paste', updateAnalysis5)
//$("#Message6").on('change input paste', updateAnalysis6)