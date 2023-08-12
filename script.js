var countdown = 6;
var score = 0;
var hitrn;

function makebubbles() {
    var gets = "";
    for (var i = 1; i < 201; i++) {
        var random = Math.floor(Math.random() * 10);
        gets += `<div class="bubble">${random}</div>`;
    }
    var gbtm = document.querySelector(".game-bottom").innerHTML = gets;
}

function timer() {
    var settime = setInterval(function () {
        if (countdown > 0) {
            countdown--;
            document.querySelector("#time").textContent = countdown;
        }
        else {
            clearInterval(settime);
            document.querySelector(".game-bottom").innerHTML = `<h1>Game Over !!</h1>`;
            document.querySelector("#hit").textContent = 0;
        }
    }, 1000);
}

function hit() {
    hitrn = Math.floor(Math.random() * 10);
    var hitval = document.querySelector("#hit").textContent = hitrn;
}

function increasescore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector(".game-bottom").addEventListener("click", function (details) {
    var clickno = Number((details.target.textContent));
    if (clickno === hitrn) {
        increasescore();
        makebubbles();
        hit();
    }
});


makebubbles();
timer();
hit();


