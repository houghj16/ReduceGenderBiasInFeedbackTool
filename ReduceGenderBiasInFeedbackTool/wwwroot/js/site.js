// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var isBiased = false;

function getAnalysis(userInput) {
    return fetch(`Index?handler=AnalyzeFeedback&text=${userInput}`)
        .then((response) => {
            return response.text();
        })
}

function highlight(text) {
    var inputText = document.getElementById("Message1");

    var output = document.getElementById("Message1Display");
    var innerHTML = inputText.value;
    var index = innerHTML.indexOf(text);
    if (index >= 0) {
        innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + text.length) + "</span > " + innerHTML.substring(index + text.length);
        output.innerHTML = innerHTML;
    }
}

function updateMarker1(sentiment) {
    if (sentiment == "We detected no biased words in your feedback! Great Job!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    $("#markerValue1").text(sentiment);
}

function updateMarker2(sentiment) {
    if (sentiment == "We detected no biased words in your feedback! Great Job!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    $("#markerValue2").text(sentiment);
}

function updateMarker3(sentiment) {
    if (sentiment == "We detected no biased words in your feedback! Great Job!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    $("#markerValue3").text(sentiment);
}

function updateMarker4(sentiment) {
    if (sentiment == "We detected no biased words in your feedback! Great Job!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    $("#markerValue4").text(sentiment);
}

function updateMarker5(sentiment) {
    if (sentiment == "We detected no biased words in your feedback! Great Job!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    $("#markerValue5").text(sentiment);
}

function updateMarker6(sentiment) {
    if (sentiment == "We detected no biased words in your feedback! Great Job!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    $("#markerValue6").text(sentiment);
}

function updateAnalysis1() {

    var userInput = $("#Message1").val();

    getAnalysis(userInput)
        .then((sentiment) => {
            updateMarker1(sentiment);
        }).then(highlight("aggressive"));
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

function showModal() {
    console.log("print");
    console.log($("myModal"));
    $(".modal").css("display", "block");
}

function closeModal() {
    $(".modal").css("display", "none");
}

$("#bias-check1").on('click', updateAnalysis1)
$("#bias-check2").on('click', updateAnalysis2)
$("#bias-check3").on('click', updateAnalysis3)
$("#bias-check4").on('click', updateAnalysis4)
$("#bias-check5").on('click', updateAnalysis5)
$("#bias-check6").on('click', updateAnalysis6)

var modal = document.getElementById("dialog");

// Get the button that opens the modal
var btn = document.getElementById("submit-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    if (isBiased) {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//$("#Message1").on('change input paste', updateAnalysis1)
//$("#Message2").on('change input paste', updateAnalysis2)
//$("#Message3").on('change input paste', updateAnalysis3)
//$("#Message4").on('change input paste', updateAnalysis4)
//$("#Message5").on('change input paste', updateAnalysis5)
//$("#Message6").on('change input paste', updateAnalysis6)