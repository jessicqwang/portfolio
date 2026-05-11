/* 
   Flirty Text Effect 
   Cleaned up for Jessica's Portfolio 
*/

var speed = 100; // speed of effect, lower is faster
var flitxt;
var flipos = 0;
var flidir = 1;
var flitim;

document.addEventListener("DOMContentLoaded", function() {
    var flirty = document.getElementById("flirt");
    
    if (flirty) {
        // Get the text from your H1, add spaces to the ends
        flitxt = flirty.firstChild.nodeValue;
        flitxt = String.fromCharCode(160) + flitxt + String.fromCharCode(160);
        
        // Clear the H1
        while (flirty.childNodes.length) {
            flirty.removeChild(flirty.childNodes[0]);
        }
        
        // Break text into individual spans so they can move
        for (var i = 0; i < flitxt.length; i++) {
            var fliri = document.createElement("span");
            fliri.setAttribute("id", "flir" + i);
            fliri.appendChild(document.createTextNode(flitxt.charAt(i)));
            flirty.appendChild(fliri);
        }
        
        // Start the animation
        flitim = setInterval(flaunt, speed);
    }
});

function flaunt() {
    flipos += flidir;
    if (flipos > flitxt.length || flipos < -flitxt.length) {
        flipos -= flidir;
        if (Math.random() < 0.25) flidir = -flidir;
        if (Math.random() < 0.25) flipos = -flipos;
    } else if (flipos == flidir && Math.random() < 0.925) {
        flipos -= flidir;
        flidir = -flidir;
    }

    for (var i = 0; i < flitxt.length; i++) {
        if (flipos + i > -1 && flipos + i < flitxt.length) {
            var flirme = document.getElementById("flir" + i);
            var flicha = flitxt.charAt(flipos + i);
            if (flirme) {
                flirme.firstChild.nodeValue = flicha;
            }
        }
    }
}