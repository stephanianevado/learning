function play(str) {

    if (str === "Q" || str === "q") {
        document.getElementById('display').innerHTML = "Star Wars Intro";
    } else if (str === "W" || str === "w") {
        document.getElementById('display').innerHTML = "The Imperial March";
    } else if (str === "E" || str === "e") {
        document.getElementById('display').innerHTML = "The Force Suite";
    } else if (str === "A" || str === "a") {
        document.getElementById('display').innerHTML = "The Clone Army";
    } else if (str === "S" || str === "s") {
        document.getElementById('display').innerHTML = "Battle Over Coruscant";
    } else if (str === "D" || str === "d") {
        document.getElementById('display').innerHTML = "Across The Stars";
    } else if (str === "Z" || str === "z") {
        document.getElementById('display').innerHTML = "TThe First Order March";
    } else if (str === "X" || str === "x") {
        document.getElementById('display').innerHTML = "Rouge One";
    } else if (str === "C" || str === "c") {
        document.getElementById('display').innerHTML = "Anakin VS Obi-Wan";
    }

    var audio = document.getElementById(str);
    audio.play();
}

window.document.onkeyup = function (event) {
    let keystroke = event.key
    if (keystroke === "Q" || keystroke === "q") {
        play("Q");
    } else if (keystroke === "W" || keystroke === "w") {
        play("W");
    } else if (keystroke === "E" || keystroke === "e") {
        play("E");
    } else if (keystroke === "A" || keystroke === "a") {
        play("A");
    } else if (keystroke === "S" || keystroke === "s") {
        play("S");
    } else if (keystroke === "D" || keystroke === "d") {
        play("D");
    } else if (keystroke === "Z" || keystroke === "z") {
        play("Z");
    } else if (keystroke === "X" || keystroke === "x") {
        play("X");
    } else if (keystroke === "C" || keystroke === "c") {
        play("C");
    } else {
        return keystroke;
    }
}
