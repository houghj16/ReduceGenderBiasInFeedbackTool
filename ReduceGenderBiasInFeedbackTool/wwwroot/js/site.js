// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var isBiased = false;
function getAnalysis(userInput) {
    return compareWordsAndGetScore(userInput)
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

    updateMarker1(getAnalysis(userInput));
}


function updateAnalysis2() {

    var userInput = $("#Message2").val();

    updateMarker2(getAnalysis(userInput));
}

function updateAnalysis3() {

    var userInput = $("#Message3").val();

    updateMarker3(getAnalysis(userInput));
}

function updateAnalysis4() {

    var userInput = $("#Message4").val();

    updateMarker4(getAnalysis(userInput));
}

function updateAnalysis5() {

    var userInput = $("#Message5").val();

    updateMarker5(getAnalysis(userInput));
}

function updateAnalysis6() {

    var userInput = $("#Message6").val();

    updateMarker6(getAnalysis(userInput));
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

function compareWordsAndGetScore(text) {
    feminineScore = 0;
    masculineScore = 0;
    // parsedRawText = text.toLowerCase().split(' ', ',', '.', '!', '?', '/', '-');
    parsedRawText = text.toLowerCase().split(/[-_,.!?@#$%^&*()\s~`]+/);
    feminineWordsInText = new Set();
    masculineWordsInText = new Set();

    // Iterate through feminine/masculine-coded word set
    feminine_coded_words.forEach(codedWord => {
        {
            parsedRawText.forEach(word => {
                if (word.includes(codedWord)) {
                    feminineScore++;
                    feminineWordsInText.add(word);
                }
            }
            );
        }
    }
    );

    masculine_coded_words.forEach(codedWord => {
        {
            for (word of parsedRawText.values()) {
                if (word.includes(codedWord)) {
                    masculineScore++;
                    masculineWordsInText.add(word);
                }
            }
        }
    }
    );

    // return [feminineWordsInText.size, masculineWordsInText.size, feminineWordsInText, masculineWordsInText];
    if (masculineScore == 0 && feminineScore == 0) {
        return "We detected no biased words in your feedback! Great Job!";
    }
    
    ret = "We have detected potentially biased text in your feedback. Please take a second look.\n";
    if (masculineScore > 0) {
        ret += `${masculineWordsInText.size} masculine coded ${(masculineWordsInText.size > 1 ? "words" : "word")} detected: ${Array.from(masculineWordsInText).join(", ")}. `;
    }
    if (feminineScore > 0) {
        ret += `${feminineWordsInText.size} feminine coded ${(feminineWordsInText.size > 1 ? "words" : "word")} detected: ${Array.from(feminineWordsInText).join(", ")}. `;
    }
    return ret;
}

feminine_coded_words = [
    "agree",
    "affectionate",
    "child",
    "cheer",
    "collab",
    "commit",
    "communal",
    "compassion",
    "connect",
    "considerate",
    "cooperat",
    "co-operat",
    "depend",
    "emotiona",
    "empath",
    "feel",
    "flatterable",
    "gentle",
    "honest",
    "interpersonal",
    "interdependen",
    "interpersona",
    "inter-personal",
    "inter-dependen",
    "inter-persona",
    "kind",
    "kinship",
    "loyal",
    "modesty",
    "nag",
    "nurtur",
    "pleasant",
    "polite",
    "quiet",
    "respon",
    "sensitiv",
    "submissive",
    "support",
    "sympath",
    "tender",
    "together",
    "trust",
    "understand",
    "warm",
    "whin",
    "enthusias",
    "inclusive",
    "yield",
    "share",
    "sharin"
]

masculine_coded_words =[
    "active",
    "adventurous",
    "aggress",
    "ambitio",
    "analy",
    "assert",
    "athlet",
    "autonom",
    "battle",
    "boast",
    "challeng",
    "champion",
    "compet",
    "confident",
    "courag",
    "decid",
    "decision",
    "decisive",
    "defend",
    "determin",
    "domina",
    "dominant",
    "driven",
    "fearless",
    "fight",
    "force",
    "greedy",
    "head-strong",
    "headstrong",
    "hierarch",
    "hostil",
    "impulsive",
    "independen",
    "individual",
    "intellect",
    "lead",
    "logic",
    "objective",
    "opinion",
    "outspoken",
    "persist",
    "principle",
    "reckless",
    "self-confiden",
    "self-relian",
    "self-sufficien",
    "selfconfiden",
    "selfrelian",
    "selfsufficien",
    "stubborn",
    "superior",
    "unreasonab"
]