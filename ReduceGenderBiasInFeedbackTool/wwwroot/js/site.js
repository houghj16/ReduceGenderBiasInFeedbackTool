// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var isBiased = false;

$("#Sug1Box").hide();
$("#Sug2Box").hide();
$("#Sug3Box").hide();
$("#Sug4Box").hide();
$("#Sug5Box").hide();
$("#Sug6Box").hide();

function getAnalysis(userInput, message) {
    console.log(userInput);
    return compareWordsAndGetScore(userInput, message);
}

function highlight(message, femWords, mascWords) {
    var inputText = document.getElementById(message);
    var output = document.getElementById(message+"Display");
    var innerHTML = inputText.value;

    femWords.forEach(w => {
        {
            var index = innerHTML.indexOf(w);
            if (index >= 0) {
                innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + w.length) + "</span > " + innerHTML.substring(index + w.length);

            }
        }
    }
    );

    mascWords.forEach(w => {
        {
            var index = innerHTML.indexOf(w);
            if (index >= 0) {
                innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + w.length) + "</span > " + innerHTML.substring(index + w.length);

            }
        }
    }
    );

    output.innerHTML = innerHTML;
}

function updateMarker1(sentiment) {
    if (sentiment == "Great work with your feedback! We have no suggestions!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    var updatedMarker = document.getElementById("markerValue1");
    updatedMarker.innerHTML = sentiment;
}

function updateMarker2(sentiment) {
    if (sentiment == "Great work with your feedback! We have no suggestions!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    var updatedMarker = document.getElementById("markerValue2");
    updatedMarker.innerHTML = sentiment;
}

function updateMarker3(sentiment) {
    if (sentiment == "Great work with your feedback! We have no suggestions!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    var updatedMarker = document.getElementById("markerValue3");
    updatedMarker.innerHTML = sentiment;
}

function updateMarker4(sentiment) {
    if (sentiment == "Great work with your feedback! We have no suggestions!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    var updatedMarker = document.getElementById("markerValue4");
    updatedMarker.innerHTML = sentiment;
}

function updateMarker5(sentiment) {
    if (sentiment == "Great work with your feedback! We have no suggestions!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    var updatedMarker = document.getElementById("markerValue5");
    updatedMarker.innerHTML = sentiment;
}

function updateMarker6(sentiment) {
    if (sentiment == "Great work with your feedback! We have no suggestions!") {
        isBiased = false;
    }
    else {
        isBiased = true;
    }
    var updatedMarker = document.getElementById("markerValue6");
    updatedMarker.innerHTML = sentiment;
}

function updateAnalysis1() {
    var userInput = $("#Message1").val();
    $("#Sug1Box").show();
    updateMarker1(getAnalysis(userInput, "Message1"));
}


function updateAnalysis2() {
    var userInput = $("#Message2").val();
    $("#Sug2Box").show();
    updateMarker2(getAnalysis(userInput, "Message2"));
}

function updateAnalysis3() {
    var userInput = $("#Message3").val();
    $("#Sug3Box").show();
    updateMarker3(getAnalysis(userInput, "Message3"));
}

function updateAnalysis4() {
    var userInput = $("#Message4").val();
    $("#Sug4Box").show();
    updateMarker4(getAnalysis(userInput, "Message4"));
}

function updateAnalysis5() {
    var userInput = $("#Message5").val();
    $("#Sug5Box").show();
    updateMarker5(getAnalysis(userInput, "Message5"));
}

function updateAnalysis6() {
    var userInput = $("#Message6").val();
    $("#Sug6Box").show();
    updateMarker6(getAnalysis(userInput, "Message6"));
}

function showModal() {
    console.log("print");
    console.log($("myModal"));
    $(".modal").css("display", "block");
}

function closeModal() {
    $(".modal").css("display", "none");
}

$("#Sug1BoxClose").on('click', () => {
    $("#Sug1Box").hide();
})

$("#Sug2BoxClose").on('click', () => {
    $("#Sug2Box").hide();
})

$("#Sug3BoxClose").on('click', () => {
    $("#Sug3Box").hide();
})

$("#Sug4BoxClose").on('click', () => {
    $("#Sug4Box").hide();
})

$("#Sug5BoxClose").on('click', () => {
    $("#Sug5Box").hide();
})

$("#Sug6BoxClose").on('click', () => {
    $("#Sug6Box").hide();
})

var input1 = document.getElementById("Message1");
input1.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        updateAnalysis1();
    }
});

var input2 = document.getElementById("Message2");
input2.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        updateAnalysis2();
    }
});

var input3 = document.getElementById("Message3");
input3.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        updateAnalysis3();
    }
});

var input4 = document.getElementById("Message4");
input4.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        updateAnalysis4();
    }
});

var input5 = document.getElementById("Message5");
input5.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        updateAnalysis5();
    }
});

var input6 = document.getElementById("Message6");
input6.addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        updateAnalysis6();
    }
});

var modal = document.getElementById("dialog");

// Get the button that opens the modal
var btn = document.getElementById("submit-btn");

// Get the <span> element that closes the modal and the review button
var span = document.getElementsByClassName("close")[0];
var rev = document.getElementById("review-btn");

btn.onclick = function () {
    if (isBiased) {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

rev.onclick = function () {
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

function compareWordsAndGetScore(text, message) {
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

    highlight(message, feminineWordsInText, masculineWordsInText);

    // return [feminineWordsInText.size, masculineWordsInText.size, feminineWordsInText, masculineWordsInText];
    if (masculineScore == 0 && feminineScore == 0) {
        return "Great work with your feedback! We have no suggestions!";
    }
    
    ret = "This feedback appears to be about the individual's personality. Consider providing concrete actions the employee could take to do better. <br> <b>Consider reviewing:</b> <br>";
    if (masculineScore > 0) {
        ret += `${masculineWordsInText.size} masculine coded ${(masculineWordsInText.size > 1 ? "words" : "word")} detected: ${Array.from(masculineWordsInText).join(", ")}. <br>`;
    }
    if (feminineScore > 0) {
        ret += `${feminineWordsInText.size} feminine coded ${(feminineWordsInText.size > 1 ? "words" : "word")} detected: ${Array.from(feminineWordsInText).join(", ")}. <br>`;
    }
    /*ret += "Go <a href='https://microsoft.myhbp.org/leadingedge/asset/view/H04BT5-PDF-ENG' target='_blank'>here</a> to explore substitutes / refinements.";*/
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